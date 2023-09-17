<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import IconArrow from '$lib/components/icons/IconArrow.svelte';
	import { fly } from 'svelte/transition';

	let previousPage: string | undefined = undefined;

	afterNavigate((navigation) => {
		previousPage = navigation?.from?.url?.pathname;
	});
</script>

<svelte:window
	on:keydown={(evt) => {
		if (evt.key == 'Escape') {
			goto(previousPage || '/invoices');
		}
	}}
/>

<main transition:fly={{y: 180, duration: 180}}>
	<div class="container-fluid">
		<a class="back-link" href={previousPage || '/invoices'}><IconArrow /></a>
		<slot />
	</div>
</main>

<style>
	main {
		height: 100%;
		min-height: 100vh;
		background-color: var(--color-primary-bg);
	}

	.container-fluid {
		max-width: 1024px;
		min-height: 100vh;
    padding-bottom: 0.5rem;
	}

	.back-link {
		position: fixed;
		top: 1.5rem;
		left: 1.5rem;
		padding: 10px;
		color: var(--pico-primary-dim);
		border-radius: 6px;

		&:hover,
		&:focus {
			color: var(--pico-primary);
		}
	}

	@media (width < 768px)  {
		.back-link {
			left: 0.6rem;
		}
	}

	@media print  {
		main {
			background-color: transparent;
		}

		.container-fluid {
			padding: 0;
		}

		.back-link {
			display: none;
		}
	}
</style>
