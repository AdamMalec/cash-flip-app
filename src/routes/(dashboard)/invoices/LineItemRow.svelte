<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import { createEventDispatcher } from 'svelte';

	export let lineItem: LineItem;

	let dispatch = createEventDispatcher();
</script>

<div class="line">
	<div>
		<input class="line-item" type="text" name="description" />
	</div>

	<div>
		<input class="line-item" type="number" name="quantity" min="0" />
	</div>

	<div>
		<input class="line-item" type="number" name="unitPrice" step="0.01" min="0" />
	</div>

	<div>
		<input class="line-item" type="number" name="amount" step="0.01" min="0" />
	</div>

	<div>
		<Button
			label=""
			style="icon"
			onClick={() => {
				dispatch('removeLineItem', lineItem.id);
			}}
		>
			<IconTrash />
		</Button>
	</div>
</div>

<style>
	.line {
		border-bottom: 2px solid hsl(221, 19%, 80%);
	}

	.line-item {
		margin-bottom: 0.6rem;
	}

	input[type='text'],
	input[type='number'] {
		height: 2.2rem;
		padding: 0.4rem;
		background-color: var(--pico-primary-inverse);
		border: none;
		border-bottom: 2px dashed var(--pico-primary-dim);
		border-radius: 0;
	}

	input[type='text']:focus,
	input[type='number']:focus {
		box-shadow: none;
		border-bottom: 4px solid var(--pico-primary-focus);
	}

	input[type='number'] {
		text-align: right;
		font-family: monospace;
	}

	input[name='quantity'] {
		text-align: center;
	}

	input[name='unitPrice'] {
		text-align: right;
	}
</style>
