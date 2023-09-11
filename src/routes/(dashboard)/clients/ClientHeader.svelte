<script lang="ts">
	export let className = '';
</script>

<ul class={`clients__table-header ${className}`}>
	<li>Status</li>
	<li>Client</li>
	<li>Received</li>
	<li>Balance</li>
	<li />
	<li />
</ul>

<style>
	.clients__table-header {
		display: none;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-column-gap: var(--grid-c-g);

		padding-inline: 1rem;
		padding-top: 1rem;

		font-weight: bold;
		color: var(--pico-primary-background);
	}

	.clients__table-header--disabled {
		color: #d7c2f1;
	}

	.clients__table-header li {
		list-style: none;
	}

	.clients__table-header li:nth-child(3),
	.clients__table-header li:nth-child(4) {
		text-align: right;
	}

	@media (width > 1024px) {
		.clients__table-header {
			display: grid;
			grid-template-columns: var(--grid-t-c);
		}
	}

	@media (width > 1280px) {
		.client {
			padding: 1.5rem;
		}
	}
</style>
