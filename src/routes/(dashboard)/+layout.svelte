<script lang="ts">
	import Navbar from "$lib/component/Navbar.svelte";
</script>

<div class="page container-fluent">

	<div class="page__header">
		<Navbar />
	</div>

	<main class="page__content">
		<slot />
	</main>

</div>

<style>
	.page {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		column-gap: 1rem;

		height: 100vh;
	}

	.page__header {
		grid-column: span 3;
		background-color: var(--pico-primary-background);
	}

	.page__content {
		grid-column: 5 / span 8;
	}
</style>
