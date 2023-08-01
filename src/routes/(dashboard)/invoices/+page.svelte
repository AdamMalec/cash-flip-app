<script lang="ts">
	import { onMount } from 'svelte';
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import BalloonAmount from '$lib/components/BalloonAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';
	import BlankState from './BlankState.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';
	import Button from '$lib/components/Button.svelte';

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
		<Button label="+ Invoice" onClick={() => {}}/>
	</div>

	<div class="invoices__content">
		<!-- invoices list-->
		{#if $invoices === null}
			Loading...
		{:else if $invoices.length <= 0}
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
