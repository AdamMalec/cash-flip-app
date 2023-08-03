<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Overlay from './Overlay.svelte';
	import Portal from './Portal.svelte';
	import IconArrow from '$lib/components/icons/IconArrow.svelte';

	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(evt) => {
		if (evt.key == 'Escape') {
			dispatch('closePanel');
		}
	}}
/>

<Portal>
	<Overlay />
	<div class="slide-panel">
		<button on:click={() => dispatch('closePanel')}>
			<IconArrow />
		</button>
		<slot />
	</div>
</Portal>

<style>
	.slide-panel {
		position: fixed;
		top: 0;
		right: 0;

		width: 75%;
		height: 100vh;
		padding-inline: 4rem;
		padding-block: 1.2rem;

		background-color: #f8f8f8;
		box-shadow: -4px 0 44px rgba(0, 0, 0, 0.16);

		overflow-y: scroll;
		z-index: var(--z-slide-panel);
	}

	button {
		position: relative;
		left: -2rem;
		padding: 10px;
		font: inherit;
		color: var(--pico-primary-dim);
		background: none;
		border: none;
	}

	button:hover {
		color: var(--pico-primary);
	}
</style>
