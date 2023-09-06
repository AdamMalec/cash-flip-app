<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import IconArrow from '$lib/components/icons/IconArrow.svelte';

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

<main>
	<div class="container-fluid invoice">
		<a class="invoice__back-link" href={previousPage || '/invoices'}><IconArrow /></a>
		<h1>Invoice Page </h1>
		<slot />
	</div>
</main>

<style>
	main {
		height: 100%;
		min-height: 100vh;
		background-color: var(--pico-primary-inverse);
	}

	.invoice {
		max-width: 1024px;
		min-height: 100vh;
    padding-bottom: 0.5rem;
		background-color: pink;
	}

	.invoice__back-link {
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
</style>
