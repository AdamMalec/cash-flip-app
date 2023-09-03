<script lang="ts">
	import AdditionalMenu from '$lib/components/AdditionalMenu.svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import IconThreeDots from '$lib/components/icons/IconThreeDots.svelte';
	import IconView from '$lib/components/icons/IconView.svelte';
	import { convertDate, isLate } from '$lib/utils/dateHelpers';
	import { centsToDollars, invoiceTotal, sumLineItems } from '$lib/utils/moneyHelpers';
	import ConfirmDelete from './ConfirmDelete.svelte';
	import InvoiceForm from './InvoiceForm.svelte';

	export let invoice: Invoice;

	let isAddMenuOpen = false;
	let isAddMenuFullOptions = true;
	let isModalShow = false;
	let isInvoiceFormShow = false;

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

	function handleEdit() {
		isInvoiceFormShow = true;
		isAddMenuOpen = false;
	}

</script>

<li class="invoices__item invoice">
	<ul class="invoice__info">
		<li class="invoice__status"><Tag label={getInvoiceLabel()} /></li>
		<li class="invoice__date">{convertDate(invoice.dueDate)}</li>
		<li class="invoice__id">{invoice.invoiceNumber}</li>
		<li class="invoice__name">{invoice.client.name}</li>
		<li class="invoice__amount">${centsToDollars(invoiceTotal(invoice.lineItems, invoice.discount))}</li>
		<li class="invoice__view">
			<a href="/">
				<IconView />
			</a>
		</li>
		<li class="invoice__more">
			<button on:click={() => (isAddMenuOpen = !isAddMenuOpen)}>
				<IconThreeDots />
			</button>

			{#if isAddMenuOpen}
				<AdditionalMenu
					{isAddMenuFullOptions}
					on:editInvoice={handleEdit}
					on:deleteInvoice={() => {
						isModalShow = true;
						isAddMenuOpen = false;
					}}
				/>
			{/if}
		</li>
	</ul>
</li>

<ConfirmDelete
	{invoice}
	{isModalShow}
	on:close={() => isModalShow = false}
/>

{#if isInvoiceFormShow}
<SlidePanel on:closePanel={() => isInvoiceFormShow = false}>
	<InvoiceForm
		{invoice}
		formState="edit"
		closePanel={() => isInvoiceFormShow = false}/>
</SlidePanel>
{/if}

<style>
	.invoice {
		margin-bottom: 1rem;
		padding: 1rem;
		list-style: none;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
	}

	.invoice__info {
		display: grid;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-template-areas:
			'id id'
			'name amount'
			'date status';
		grid-column-gap: var(--grid-c-g);
		align-items: center;

		margin: 0;
		padding: 0;

		border-radius: 0.5rem;
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

	@media (width > 1024px) {
		.invoice {
			padding: 1.5rem;
		}

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
</style>
