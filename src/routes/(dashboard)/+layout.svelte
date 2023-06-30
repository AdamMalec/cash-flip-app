<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
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
	}

	.page__content {
		grid-column: 1 / -1;
	}

	@media (width > 768px) {
		.page {
			grid-column-gap: 4rem;
		}

		.page__header {
			grid-column: span 3 / span 3;
		}

		.page__content {
			grid-column: span 8 / span 8;
		}
	}
</style>
