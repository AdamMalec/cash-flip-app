<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Overlay from './Overlay.svelte';
	import Portal from './Portal.svelte';
	import IconArrow from '$lib/components/icons/IconArrow.svelte';
	import Button from './Button.svelte';

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
		<div class="slide-panel-button">
			<Button label="" style="icon" onClick={() => dispatch('closePanel')}>
				<IconArrow />
			</Button>
		</div>
		<slot />
	</div>
</Portal>

<style>
	.slide-panel {
		position: fixed;
		top: 0;
		right: 0;

		width: 100%;
		height: 100vh;
		padding-inline: 1rem;
		padding-block: 1.2rem;

		background-color: #f8f8f8;
		box-shadow: -4px 0 44px rgba(0, 0, 0, 0.16);

		overflow-y: scroll;
		z-index: var(--z-slide-panel);
	}

	.slide-panel-button {
		position: relative;
		left: -0.5rem;
	}

	@media (width > 768px) {
		.slide-panel {
			width: 75%;
			padding-inline: 2rem;
		}
	}
</style>
