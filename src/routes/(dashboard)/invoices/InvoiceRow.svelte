<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import { convertDate, isLate } from '$lib/utils/dateHelpers';
	import { centsToDollars, sumLineItems } from '$lib/utils/moneyHelpers';

	export let invoice: Invoice;

	function getInvoiceLabel() {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
			return 'sent';
		} else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
			return 'late';
		} else if (invoice.invoiceStatus === 'paid') {
			return 'paid';
		}
	}
</script>

<li class="invoices__item invoice">
	<ul class="invoice__info">
		<li class="invoice__status"><Tag label={getInvoiceLabel()} /></li>
		<li class="invoice__date">{convertDate(invoice.dueDate)}</li>
		<li class="invoice__id">{invoice.invoiceNumber}</li>
		<li class="invoice__name">{invoice.client.name}</li>
		<li class="invoice__amount">${centsToDollars(sumLineItems(invoice.lineItems))}</li>
		<li class="invoice__view">
			<a href="/"
				><svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24 11.5C24 11.5 18.9285 4 12 4C5.0715 4 0 11.5 0 11.5C0 11.5 5.0715 19 12 19C18.9285 19 24 11.5 24 11.5ZM12 16C9.5145 16 7.5 13.987 7.5 11.5C7.5 9.013 9.5145 7 12 7C14.484 7 16.5 9.013 16.5 11.5C16.5 13.987 14.484 16 12 16Z"
					/>
					<path
						d="M12 13C12.8284 13 13.5 12.3284 13.5 11.5C13.5 10.6716 12.8284 10 12 10C11.1716 10 10.5 10.6716 10.5 11.5C10.5 12.3284 11.1716 13 12 13Z"
					/>
				</svg></a
			>
		</li>
		<li class="invoice__more">
			<button>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="5" cy="12" r="2" />
					<circle cx="12" cy="12" r="2" />
					<circle cx="19" cy="12" r="2" />
				</svg>
			</button>
		</li>
	</ul>
</li>

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
		grid-area: more;
	}

	.invoice__view a,
	.invoice__more button {
		display: inline-block;
		padding: 0.2rem;
		color: var(--pico-inv-color);
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
