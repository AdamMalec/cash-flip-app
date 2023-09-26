<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { states } from '$lib/utils/states';
	import { addClient, updateClient } from '$lib/stores/ClientStore';
	import toast from 'svelte-french-toast';

	export let client: Client = {} as Client;
	export let closePanel: () => void = () => {};
	export let formState: 'create' | 'edit' = 'create';

	let isModalShow: boolean = false;


	function handleSubmit() {
		if(formState === 'create') {
			addClient(client);
		} else {
			updateClient(client);
			toast.success('Your client was successfully update.', {
				style: 'font-size: 0.8rem',
				iconTheme: {
					primary: '#22c697',
					secondary: '#f8f8f8'
				}
			});
		}

		closePanel();
	}
</script>

<h2>
	{#if formState === 'create'}Add
	{:else}Edit
	{/if}a Client
</h2>

<form on:submit|preventDefault={handleSubmit}>
	<div class="field client-name">
		<label for="name">Client Name</label>
		<input type="text" name="name" id="name" required bind:value={client.name} />
	</div>

	<div class="field client-email">
		<label for="email">Email Address</label>
		<input type="email" name="email" id="email" required bind:value={client.email} />
	</div>

	<div class="field client-address">
		<label for="address">Address</label>
		<input type="text" name="address" id="address" bind:value={client.street} />
	</div>

	<div class="field client-city">
		<label for="city">City</label>
		<input type="text" name="city" id="city" bind:value={client.city} />
	</div>

	<div class="field client-state">
		<label for="state">State</label>
		<select name="state" id="state" bind:value={client.state}>
			<option />
			{#each states as state}
				<option value={state.value}>{state.name}</option>
			{/each}
		</select>
	</div>

	<div class="field client-zip">
		<label for="zip">Zip</label>
		<input type="text" name="zip" id="zip" minlength="5" bind:value={client.zip} />
	</div>

	<!-- buttons -->
	<div class="button">
		{#if formState === 'edit'}
			<Button label="Delete" style="destructive" onClick={() => {}} />
		{/if}
	</div>
	<div class="buttons">
		<Button label="Cancel" style="secondary" onClick={() => {}} />
		<button type="submit">Save</button>
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

	.client-name,
	.client-email,
	.client-address {
		grid-column: span 6 / span 6;
	}

	.client-city,
	.client-state,
	.client-zip {
		grid-column: span 2 / span 2;
	}

	.button {
		grid-column: span 2 / span 2;
	}

	.buttons {
		grid-column: span 4 / span 4;
		display: flex;
		justify-content: flex-end;
	}

	.buttons button:last-child {
		margin-bottom: 0;
		margin-left: 0.6rem;
		padding: 0.5rem 1rem;
		font-weight: bold;
	}
</style>
