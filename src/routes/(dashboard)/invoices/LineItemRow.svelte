<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import { dollarsToCents } from '$lib/utils/moneyHelpers';
	import { createEventDispatcher } from 'svelte';

	export let lineItem: LineItem;
	export let canDelete: boolean = false;
	export let isRequired: boolean = false;

	let unitPrice: string = (lineItem.amount / lineItem.quantity).toFixed(2);
	let amount: string = lineItem.amount.toFixed(2);

	$: {
		amount = (lineItem.quantity * Number(unitPrice)).toFixed(2);
		lineItem.amount = dollarsToCents(Number(amount));
	}

	let dispatch = createEventDispatcher();
</script>

<div class="line">
	<div>
		<input
			class="line-item"
			type="text"
			name="description"
			autocomplete="off"
			required={isRequired}
			bind:value={lineItem.description}
		/>
	</div>

	<div>
		<input
			class="line-item"
			type="number"
			name="quantity"
			min="0"
			required={isRequired}
			bind:value={lineItem.quantity} />
	</div>

	<div>
		<input
			class="line-item"
			type="number"
			name="unitPrice"
			step="0.01"
			min="0"
			bind:value={unitPrice}
			on:blur={() => {
				(unitPrice = Number(unitPrice).toFixed(2));
				dispatch('updateLineItem');
				}}
		/>
	</div>

	<div>
		<input
			class="line-item"
			type="number"
			name="amount"
			step="0.01"
			min="0"
			bind:value={amount}
			on:blur={() => dispatch('updateLineItem')}
			disabled
		/>
	</div>

	<div>
		{#if canDelete}
		<Button
			label=""
			style="icon"
			onClick={() => {
				dispatch('removeLineItem', lineItem.id);
			}}
		>
			<IconTrash />
		</Button>
		{/if}
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

	input[type='number'] {
		padding-right: 0;
		text-align: right;
		font-family: monospace;
	}

	input[name='quantity'] {
		text-align: center;
	}

	input[type='text']:focus,
	input[type='number']:focus {
		box-shadow: none;
		border-bottom: 4px solid var(--pico-primary-focus);
	}

	input[type='text']:disabled,
	input[type='number']:disabled {
		border-bottom: 0;
	}
</style>
