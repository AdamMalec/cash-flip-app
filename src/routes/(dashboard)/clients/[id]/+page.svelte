<script lang="ts">
	import BalloonAmount from '$lib/components/BalloonAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import InvoiceRow from '../../invoices/InvoiceRow.svelte';
	import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';
	import BlankState from '../../invoices/BlankState.svelte';
	import InvoiceHeader from '../../invoices/InvoiceHeader.svelte';
	import Button from '$lib/components/Button.svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import IconEdit from '$lib/components/icons/IconEdit.svelte';
	import ClientForm from '../ClientForm.svelte';
	import { isLate } from '$lib/utils/dateHelpers';

  export let data;
  const client = {...data} as Client;
	const invoices: Invoice[] = client.invoices as Invoice[];
	let isClientFormShow: boolean = false;
	let isEditingCurrentClient: boolean = false;

	function editClient() {
		isClientFormShow = true;
		isEditingCurrentClient = true;
	}

	function closePanel() {
		isClientFormShow = false;
		isEditingCurrentClient  = false;
	}

	function getDraft() {
		const draftInvoices = invoices.filter((invoice) => invoice.invoiceStatus === 'draft');
		return centsToDollars(sumInvoices(draftInvoices));
	}

	function getPaid() {
		const paidInvoices = invoices.filter((invoice) => invoice.invoiceStatus === 'paid');
		return centsToDollars(sumInvoices(paidInvoices));
	}

	function getTotalOverdue() {
		const paidInvoices = invoices.filter((invoice) => invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate));
		return centsToDollars(sumInvoices(paidInvoices));
	}

	function getTotalOutstanding() {
		const paidInvoices = invoices.filter((invoice) => invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate));
		return centsToDollars(sumInvoices(paidInvoices));
	}

</script>

<svelte:head>
	<title>{client.name} | Cash Peak</title>
</svelte:head>

<div class="invoices">
	<div class="invoices__header">
		{#if client.invoices && client.invoices.length > 0}
			<Search />
		{:else}
			<div />
		{/if}

		<div>
			<Button label="+ Client" isAnimated={true} onClick={() => {isClientFormShow = true}}/>
		</div>
	</div>

	<div class="invoices__content">
		{#if client.invoices === null}
			Loading...
		{:else if client.invoices && client.invoices.length <= 0}
			<BlankState />
		{:else if client.invoices}
		<div class="info">
			<h1>{client.name}</h1>
			<button class="edit__btn" on:click={editClient}>
				<IconEdit />
				<span>Edit</span>
			</button>
		</div>

		<ul class="total">
			<li class="total__item total__item--overdue">
				<span>Total Overdue</span>
				<p><sup>$</sup>{getTotalOverdue()}</p>
			</li>
			<li class="total__item total__item--outstanding">
				<span>Total&nbsp;Outstanding</span>
				<p><sup>$</sup>{getTotalOutstanding()}</p>
			</li>
			<li class="total__item total__item--draft">
				<span>Total Draft</span>
				<p><sup>$</sup>{getDraft()}</p>
			</li>
			<li class="total__item total__item--paid">
				<span>Total Paid</span>
				<p><sup>$</sup>{getPaid()}</p>
			</li>
		</ul>

			<InvoiceHeader />

			<ul class="invoices__list">
				{#each invoices as invoice}
					<InvoiceRow {invoice} />
				{/each}
			</ul>
			<BalloonAmount label="Total" amount={`$${centsToDollars(sumInvoices(invoices))}`} />
		{/if}
	</div>
</div>

{#if isClientFormShow}
<SlidePanel on:closePanel={closePanel}>
	<ClientForm
		{closePanel}
		formState={isEditingCurrentClient ? 'edit' : 'create'}
		client={isEditingCurrentClient ? client : undefined}
	/>
</SlidePanel>
{/if}

<style>
	.invoices {
		--grid-t-c: 100px 106px 56px 1fr 1fr 32px 32px;
		--grid-t-c-mobile: 1fr 90px;
		--grid-c-g: 1rem;

		padding-top: 1rem;
	}

	.invoices__header {
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
	}

	.info {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.info h1 {
		font-size: 2rem;
		color: var(--color-black);
	}

	.edit__btn {
		display: flex;
		align-items: center;
		align-self: center;
		column-gap: 0.2rem;

		padding: 0.4rem 0.6rem;

		font-weight: bold;
		color: var(--pico-primary-dim);
		background-color: transparent;
		border: none;
	}

	.edit__btn:hover,
	.edit__btn:focus {
		color: var(--pico-primary);
	}

	.edit__btn span {
		padding-left: 0.4rem;
	}

	.total {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 0.3rem;
		margin:0;
		margin-bottom: 1rem;
		padding: 1rem;

		list-style:none;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
		background-color: #f3eef9;
	}

	.total__item {
		list-style: none;
		text-align: center;
	}

	.total__item span {
		font-size: 0.875rem;
		font-weight: bold;
		color: var(--pico-secondary);
	}

	.total__item sup {
		/* position: relative;
		top: 0.5rem; */
		font-size: 0.5em;
	}

	.total__item p {
		font-size: 2rem;
		font-weight: bold;
		color: var(--pico-primary);
	}

	.invoices__list {
		display: flex;
    flex-direction: column;
		margin: 0;
		padding: 0;
	}

	@media (width > 768px) {
		.invoices {
			padding-top: 2rem;
		}

		.invoices__header {
			flex-direction: row;
			margin-bottom: 1rem;
		}

		/* .total {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		} */
	}

	@media (width > 1024px)  {
		.total {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
