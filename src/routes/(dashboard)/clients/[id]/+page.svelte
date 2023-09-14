<script lang="ts">
	import { onMount } from 'svelte';
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import BalloonAmount from '$lib/components/BalloonAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import InvoiceRow from '../../invoices/InvoiceRow.svelte';
	import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';
	import BlankState from '../../invoices/BlankState.svelte';
	import InvoiceHeader from '../../invoices/InvoiceHeader.svelte';
	import Button from '$lib/components/Button.svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import InvoiceForm from '../../invoices/InvoiceForm.svelte';
	import IconEdit from '$lib/components/icons/IconEdit.svelte';

  export let data;
  const client = {...data};
	let isClientFormShow: boolean = false;

	onMount(() => {
		loadInvoices();
	});
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

		<!-- new invoices -->
		<div>
			<Button label="+ Client" isAnimated={true} onClick={() => {isClientFormShow = true}}/>
		</div>
	</div>

	<div class="info">
		<h1>Hydra FM</h1>
		<button class="edit__btn" on:click={() => {}}>
			<IconEdit />
			<span>Edit</span>
		</button>
	</div>

	<ul class="total">
		<li class="total__item total__item--overdue">
			<span>Total Overdue</span>
			<p><sup>$</sup>300.00</p>
		</li>
		<li class="total__item total__item--outstanding">
			<span>Total Outstanding</span>
			<p><sup>$</sup>300.00</p>
		</li>
		<li class="total__item total__item--draft">
			<span>Total Draft</span>
			<p><sup>$</sup>300.00</p>
		</li>
		<li class="total__item total__item--paid">
			<span>Total Paid</span>
			<p><sup>$</sup>300.00</p>
		</li>
	</ul>


	<div class="invoices__content">
		<InvoiceHeader />
		<ul class="invoices__list">
			{#each $invoices as invoice}
				<InvoiceRow {invoice} />
			{/each}
		</ul>
		<BalloonAmount label="Total" amount={`$${centsToDollars(sumInvoices($invoices))}`} />
	</div>
</div>

{#if isClientFormShow}
<SlidePanel on:closePanel={() => isClientFormShow = false}>
	<InvoiceForm closePanel={() => isClientFormShow = false}/>
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
		grid-template-columns: repeat(4, minmax(0, 1fr));
		column-gap: 1rem;
		margin:0;
		padding: 1rem 1.5rem;
		list-style:none;
		border-radius: 0.5rem;
		background-color: var(--pico-primary-inverse);
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
	}
</style>
