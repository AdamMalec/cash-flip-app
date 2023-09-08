<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import { centsToDollarsWithoutCommas, dollarsToCents } from '$lib/utils/moneyHelpers';
	import { createEventDispatcher } from 'svelte';

	export let lineItem: LineItem;
	export let canDelete: boolean = false;
	export let isRequired: boolean = false;
	export let isEditable: boolean = true;

	let unitPrice: string = centsToDollarsWithoutCommas(lineItem.amount / lineItem.quantity);
	let amount: string = centsToDollarsWithoutCommas(lineItem.amount);

	$: {
		amount = (lineItem.quantity * Number(unitPrice)).toFixed(2);
		lineItem.amount = dollarsToCents(Number(amount));
	}

	let dispatch = createEventDispatcher();
</script>

<div class="line">
	<div class="description">
		<label class="line-label" for="description">Description</label>
		<input
			class="line-item"
			type="text"
			id="description"
			name="description"
			autocomplete="off"
			required={isRequired}
			bind:value={lineItem.description}
			disabled={!isEditable}
		/>
	</div>

	<div class="quantity">
		<label class="line-label" for="quantity">Qty</label>
		<input
			class="line-item"
			type="number"
			id="quantity"
			name="quantity"
			min="0"
			required={isRequired}
			bind:value={lineItem.quantity}
			on:change={() => {dispatch('updateLineItem')}}
			disabled={!isEditable}
		/>
	</div>

	<div class="unitPrice">
		<label class="line-label" for="unitPrice">UnitPrice</label>
		<input
			class="line-item"
			type="number"
			id="unitPrice"
			name="unitPrice"
			step="0.01"
			min="0"
			bind:value={unitPrice}
			on:change={() => {
				unitPrice = Number(unitPrice).toFixed(2);
				dispatch('updateLineItem');
				}}
			disabled={!isEditable}
		/>
	</div>

	<div class="amount">
		<label class="line-label" for="amount">Amount</label>
		<input
			class="line-item"
			type="number"
			id="amount"
			name="amount"
			step="0.01"
			min="0"
			bind:value={amount}
			disabled
		/>
	</div>

	<div class="trash">
		{#if canDelete && isEditable}
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

	.line-label {
		display: none;
	}

	@media (width < 576px)  {
		.line {
			position: relative;
		}

		.line-label {
			display: block;
			margin-bottom: 0;
			color: #888888;
		}

		.quantity .line-label  {
			text-align: center;
		}

		.unitPrice .line-label ,
		.amount .line-label  {
			padding-right: 0.5rem;
			text-align: right;
		}

		.trash {
			position: absolute;
			top: 0;
			right: 0;
		}
	}

	input[name='description'] {
		font-weight: 700;
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

	@media (width < 576px)  {
		input[type='text'],
		input[type='number']  {
			padding-left: 0;
		}
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
