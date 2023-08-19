<script lang="ts">
	import LineItemRows from './LineItemRows.svelte';
	import Button from '$lib/components/Button.svelte';

	const blankLineItem = {
		id: crypto.randomUUID(),
		description: '',
		quantity: 0,
		amount: 0
	};

	let lineItems: LineItem[] = [{...blankLineItem}];

	function addLineItem() {
		lineItems = [...lineItems, {...blankLineItem, id: crypto.randomUUID()}];
	}

	function updateLineItem() {
		lineItems = lineItems;
	}

	function removeLineItem(event) {
		console.log('remove line item');
		lineItems = lineItems.filter((item) => item.id !== event.detail)
	}
</script>

<h2>Add an Invoice</h2>

<form>
	<!-- client -->
	<div class="field client-select">
		<label for="client">Client</label>
		<select name="client" id="client">
			<option value="zeal">ZEAL</option>
		</select>
	</div>
	<div class="field client-button">
		<span>or</span>
		<Button label="+ Client" style="outline" onClick={() => {}} />
	</div>

	<!-- invoice id -->
	<div class="field invoice-id">
		<label for="id">Invoice ID</label>
		<input type="text" name="id" />
	</div>

	<!-- due data -->
	<div class="field due-data">
		<label for="dueDate">Due Data</label>
		<input type="date" name="dueDate" />
	</div>

	<!-- issue data -->
	<div class="field issue-data">
		<label for="issueDate">Issue Data</label>
		<input type="date" name="issueDate" />
	</div>

	<!-- subjects -->
	<div class="field subjects">
		<label for="subject">Subject</label>
		<input type="text" name="subject" />
	</div>

	<!-- line items -->
	<div class="field line-items">
		<LineItemRows lineItems={lineItems}
			on:addLineItem={addLineItem}
			on:removeLineItem={removeLineItem}
			on:updateLineItem={updateLineItem}
		/>
	</div>

	<!-- notes -->
	<div class="field notes">
		<label for="notes">Notes <span>(optional, displayed on invoice)</span></label>
		<textarea name="notes" id="notes" />
	</div>

	<!-- terms -->
	<div class="field terms">
		<label for="terms">Terms <span>(optional, enter your terms and conditions)</span></label>
		<textarea name="terms" id="terms" />
		<span class="formatting">Formatting tips: <strong>*bold*</strong>, <em>_italic_</em></span>
	</div>

	<!-- buttons -->
	<div class="button">
		<Button label="Delete" style="destructive" onClick={() => {}} />
	</div>
	<div class="buttons">
		<button>Cancel</button>
		<button>Save</button>
	</div>
</form>

<style>
	h2 {
		margin-top: 1rem;
		margin-bottom: 1.6rem;
		color: var(--color-primary);
		row-gap: 1rem;
	}

	form {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		column-gap: 1rem;
	}

	.client-select {
		grid-column: span 2 / span 2;
	}

	.client-button {
		grid-column: span 2 / span 2;
		display: flex;
		align-items: end;
		column-gap: 1rem;
	}

	.client-button span {
		line-height: 2.5rem;
	}

	.invoice-id {
		grid-column: span 2 / span 2;
	}

	.due-data {
		grid-column: span 2 / span 2;
	}

	.issue-data {
		grid-column: span 2 / span 2;
		grid-column-start: 5;
	}

	.subjects {
		grid-column: span 6 / span 6;
	}

	.line-items {
		grid-column: span 6 / span 6;
	}

	.notes {
		grid-column: span 6 / span 6;
	}

	.terms {
		grid-column: span 6 / span 6;
	}

	.terms .formatting {
		font-size: 0.8rem;
		color: var(--pico-secondary);
	}

	.button {
		grid-column: span 2 / span 2;
	}

	.buttons {
		grid-column: span 4 / span 4;
		display: flex;
		justify-content: flex-end;
	}
</style>
