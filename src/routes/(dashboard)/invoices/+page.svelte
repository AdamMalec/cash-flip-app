<script lang="ts">
	import { onMount } from 'svelte';
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import BalloonAmount from '$lib/components/BalloonAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';
	import BlankState from './BlankState.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';

	onMount(() => {
		loadInvoices();
	});
</script>

<svelte:head>
	<title>Invoices | Cash Peek</title>
</svelte:head>

<div class="invoices">
	<div class="invoices__header">
		{#if $invoices.length > 0}
			<Search />
		{:else}
			<div />
		{/if}

		<!-- new invoices -->
		<div>
			<button>+ Invoice</button>
		</div>
	</div>

	<div class="invoices__content">
		<!-- invoices header -->

		<!-- invoices list-->
		{#if $invoices.length === null}
			Loading...
		{:else if $invoices.length === 0}
			<BlankState />
		{:else}
			<InvoiceHeader />
			<ul class="invoices__list">
				{#each $invoices as invoice}
					<InvoiceRow {invoice} />
				{/each}
				<BalloonAmount label="Total" amount={`$${centsToDollars(sumInvoices($invoices))}`} />
			</ul>
		{/if}
	</div>
</div>

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

	.invoices__header button {
		padding: 0.5rem 1rem;
		font-weight: bold;
		box-shadow: 0px 6px 14px rgba(140, 103, 213, 0.18);
		transition: all 0.12s;
	}

	.invoices__header button:hover {
		transform: translateY(-2px);
		box-shadow: 0px 12px 22px rgba(140, 103, 213, 0.3);
	}

	.invoices__header button:focus {
		outline: 4px solid var(--color-accent);
	}

	.invoices__list {
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
