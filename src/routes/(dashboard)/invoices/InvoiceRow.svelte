<script lang="ts">
	import { clickOutside } from '$lib/actions/ClickOutside';
	import { swipe } from '$lib/actions/Swipe';
	import AdditionalMenuInvoices from '$lib/components/AdditionalMenuInvoices.svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import IconCancel from '$lib/components/icons/IconCancel.svelte';
	import IconEdit from '$lib/components/icons/IconEdit.svelte';
	import IconSend from '$lib/components/icons/IconSend.svelte';
	import IconThreeDots from '$lib/components/icons/IconThreeDots.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import IconView from '$lib/components/icons/IconView.svelte';
	import { convertDate, isLate } from '$lib/utils/dateHelpers';
	import { centsToDollars, invoiceTotal } from '$lib/utils/moneyHelpers';
	import ConfirmDelete from './ConfirmDelete.svelte';
	import InvoiceForm from './InvoiceForm.svelte';

	export let invoice: Invoice;

	let isAddMenuOpen = false;
	let isAddMenuFullOptions = true;
	let isModalShow = false;
	let isInvoiceFormShow = false;
	let triggerReset = false;

	function getInvoiceLabel() {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
			return 'sent';
		} else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
			isAddMenuFullOptions = false;
			return 'late';
		} else if (invoice.invoiceStatus === 'paid') {
			return 'paid';
		}
	}

	function handleSend() {
		console.log('send....');
	}

	function handleEdit() {
		isInvoiceFormShow = true;
		isAddMenuOpen = false;
	}

	function handleDelete() {
		isModalShow = true;
		isAddMenuOpen = false;
	}
</script>

<li class="invoices__item invoice">
	<ul class="invoice__info" use:swipe={{triggerReset}} on:outOfView={() => {triggerReset=false}}>
		<li class="invoice__status"><Tag label={getInvoiceLabel()} /></li>
		<li class="invoice__date">{convertDate(invoice.dueDate)}</li>
		<li class="invoice__id">{invoice.invoiceNumber}</li>
		<li class="invoice__name">{invoice.client.name}</li>
		<li class="invoice__amount">
			${centsToDollars(invoiceTotal(invoice.lineItems, invoice.discount))}
		</li>
		<li class="invoice__view">
			<a href={`/invoices/${invoice.id}`} title="Show Invoice">
				<IconView />
			</a>
		</li>
		<li
			class="invoice__more"
			use:clickOutside={() => {
				isAddMenuOpen = false;
			}}
		>
			<button on:click={() => (isAddMenuOpen = !isAddMenuOpen)}>
				<IconThreeDots />
			</button>

			{#if isAddMenuOpen}
				<AdditionalMenuInvoices
					{isAddMenuFullOptions}
					on:sendInvoice={handleSend}
					on:editInvoice={handleEdit}
					on:deleteInvoice={handleDelete}
				/>
			{/if}
		</li>
	</ul>

	<!-- swipe options -->
	<ul class="invoice__options">
		<li class="invoice__option-item">
			<a href={`/invoices/${invoice.id}`} class="invoice__option-btn"><IconView size={32}/>View</a>
		</li>
		{#if isAddMenuFullOptions}
			<li class="invoice__option-item">
				<button class="invoice__option-btn" on:click={handleSend}><IconSend size={32}/>Send</button>
			</li>
			<li class="invoice__option-item">
				<button class="invoice__option-btn" on:click={handleEdit}><IconEdit size={32}/>Edit</button>
			</li>
		{/if}
		<li class="invoice__option-item">
			<button class="invoice__option-btn"on:click={handleDelete}><IconTrash size={32}/>Delete</button>
		</li>
		<li class="invoice__option-item">
			<button class="invoice__option-btn" on:click={() => {triggerReset = true}}><IconCancel size={32}/>Cancel</button>
		</li>
	</ul>
</li>

<ConfirmDelete {invoice} {isModalShow} on:close={() => (isModalShow = false)} />

{#if isInvoiceFormShow}
	<SlidePanel on:closePanel={() => (isInvoiceFormShow = false)}>
		<InvoiceForm {invoice} formState="edit" closePanel={() => (isInvoiceFormShow = false)} />
	</SlidePanel>
{/if}

<style>
	.invoice {
		position: relative;
		margin-bottom: 1rem;
		list-style: none;
	}

	.invoice__info {
		position: relative;
		display: grid;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-template-areas:
			'id id'
			'name amount'
			'date status';
		grid-column-gap: var(--grid-c-g);
		align-items: center;

		margin: 0;
		padding: 1rem;

		border-radius: 0.5rem;
		background-color: var(--pico-primary-inverse);
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
		z-index: var(--z-row);
	}

	.invoice__view,
	.invoice__more {
		display: none;
	}

	.invoice__info li {
		list-style: none;
	}

	.invoice__status {
		grid-area: status;
		text-align: center;
	}

	.invoice__date {
		grid-area: date;
	}

	.invoice__id {
		grid-area: id;
	}

	.invoice__name {
		grid-area: name;
		font-weight: bold;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.invoice__amount {
		grid-area: amount;
		font-family: monospace;
		font-weight: bold;
		text-align: center;
	}

	.invoice__status,
	.invoice__date,
	.invoice__id,
	.invoice__name,
	.invoice__amount,
	.invoice__view,
	.invoice__more {
		font-size: 0.875rem;
	}

	.invoice__view {
		grid-area: view;
	}

	.invoice__more {
		position: relative;

		grid-area: more;
	}

	.invoice__view a,
	.invoice__more button {
		display: inline-block;
		padding: 0.2rem;
		color: var(--pico-primary-dim);
		border-radius: var(--pico-border-radius);
	}

	.invoice__view a:hover,
	.invoice__view a:focus,
	.invoice__more button:hover,
	.invoice__more button:focus {
		color: var(--pico-primary);
	}

	.invoice__more button {
		background-color: transparent;
		border: none;
	}

	.invoice__options {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 0;
		padding: 0;
		list-style: none;
		z-index: var(--z-row-actions);
	}

	.invoice__option-item {
		min-width: 4rem;
		list-style: none;
	}

	.invoice__option-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;

		font-weight: bold;
		text-decoration: none;
		color: var(--pico-primary);
		border: none;
		background-color: transparent;
	}

	.invoice__option-btn:focus,
	.invoice__option-btn:focus-visible {
		box-shadow: none;
	}

	@media (width > 576px) {
		.invoice__option-item {
			min-width: 4.5rem;
		}
	}

	@media (width > 768px) {
		.invoice__option-item {
			min-width: 5rem;
		}
	}

	@media (width > 1024px) {
		.invoice__info {
			grid-template-columns: var(--grid-t-c);
			grid-template-areas: 'status date id name amount view more';
		}

		.invoice__status {
			text-align: left;
		}

		.invoice__view,
		.invoice__more {
			display: grid;
		}
	}

	@media (width > 1280px) {
		.invoice__info {
			padding: 1.5rem;
		}
	}
</style>
