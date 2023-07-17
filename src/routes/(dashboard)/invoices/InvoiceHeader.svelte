<script lang="ts">
	export let className = '';
</script>

<ul class={`invoices__table-header ${className}`}>
	<li>Status</li>
	<li>Due Date</li>
	<li>ID</li>
	<li>Client</li>
	<li>Amount</li>
	<li />
	<li />
</ul>

<style>
	.invoices__table-header {
		display: none;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-column-gap: var(--grid-c-g);

		padding-inline: 1.5rem;
		padding-top: 1rem;

		font-weight: bold;
		color: var(--pico-primary-background);
	}

	.invoices__table-header--disabled {
		color: #d7c2f1;
	}

	.invoices__table-header li {
		list-style: none;
	}

	.invoices__table-header li:nth-child(5) {
		text-align: center;
	}

	@media (width > 1024px) {
		.invoices__table-header {
			display: grid;
			grid-template-columns: var(--grid-t-c);
		}
	}
</style>
