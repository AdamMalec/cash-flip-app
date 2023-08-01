<script>
	import BlankRow from '$lib/components/BlankRow.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';
</script>

<div>
	<h2>Add your first invoice</h2>
	<InvoiceHeader className="invoices__table-header--disabled" />
	<BlankRow />
	<BlankRow />
	<BlankRow />
</div>

<style>
	h2 {
		position: relative;
		margin-top: var(--pico-typography-spacing-top);
		margin-bottom: var(--pico-typography-spacing-vertical);
		padding-left: 5.8rem;
		text-align: left;
		color: var(--color-success-bg);
	}

	h2::after {
		content: '☝';
		position: absolute;
		left: 1.4rem;
		top: -2rem;
		font-size: 3rem;
		transform-origin: right;

		animation: pulse 0.7s linear infinite alternate;
	}

	@media (width > 768px) {
		h2 {
			padding-right: 5.8rem;
			padding-left: 0;
			text-align: right;
		}

		h2::after {
			/* left: none; */
			right: 2rem;
			/* bottom: 0.2rem; */
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.16);
		}
	}
</style>
