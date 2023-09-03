<script lang="ts">
	import Portal from '$lib/components/Portal.svelte';
	import Overlay from '$lib/components//Overlay.svelte';
	import IconClose from './icons/IconClose.svelte';
	import { createEventDispatcher } from 'svelte';

	export let isVisible: boolean = false;
	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(evt) => {
		if (evt.key == 'Escape') {
			dispatch('close');
		}
	}}
/>

{#if isVisible}
	<Portal>
		<Overlay --modal-overlay="var(--z-modal-overlay)"/>
		<div class="modal">
			<div class="modal__body">
				<button class="modal__close" on:click={() => dispatch('close')}><IconClose /></button>
				<slot />
			</div>
		</div>
	</Portal>
{/if}

<style>
	.modal {
		position: fixed;
		inset: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		z-index: var(--z-modal);
	}

	.modal__body {
		position: relative;

		width: 100%;
		max-width: 25.6rem;
		min-height: 13.333rem;
		padding: 2rem;

		background-color: var(--pico-primary-inverse);
		border: 2px solid var(--color-black);
		border-radius: 8px;
	}

	.modal__close {
		position: absolute;
		top: -0.1rem;
		right: -0.1rem;
		padding: 0.6rem;
		color: var(--pico-primary);
		background-color: transparent;
		border: none;
	}
</style>
