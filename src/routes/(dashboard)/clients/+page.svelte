<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Search from '$lib/components/Search.svelte';
	import ClientHeader from './ClientHeader.svelte';
	import ClientRow from './ClientRow.svelte';
	import BlankState from '../clients/BlankState.svelte';
	import { clients, loadClients } from '$lib/stores/ClientStore';
	import { onMount } from 'svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import ClientForm from './ClientForm.svelte';

	let isClientFormShow: boolean = false;

	onMount(() => {
		loadClients();
	});
</script>

<svelte:head>
	<title>Clients | Cash Peak</title>
</svelte:head>

<div class="clients">
	<div class="clients__header">
		{#if $clients.length > 0}
			<Search />
		{:else}
			<div />
		{/if}

		<!-- new clients -->
		<div>
			<Button label="+ Client" isAnimated={true} onClick={() => {isClientFormShow = true}} />
		</div>
	</div>

	<div class="clients__content">
		<!-- clients list-->
		{#if $clients === null}
			Loading...
		{:else if $clients.length <= 0}
			<BlankState />
		{:else}
			<ClientHeader />
			<ul class="clients__list">
				{#each $clients as client, index}
					<ClientRow {client} --z-row={900 - index}/>
				{/each}
			</ul>
		{/if}
	</div>
</div>

{#if isClientFormShow}
<SlidePanel on:closePanel={() => isClientFormShow = false}>
	<ClientForm closePanel={() => isClientFormShow = false}/>
</SlidePanel>
{/if}

<style>
	.clients {
		--grid-t-c: 100px 1fr 110px 110px 32px 32px;
		--grid-t-c-mobile: 1fr 100px;
		--grid-c-g: 1rem;

		padding-top: 1rem;
	}

	.clients__header {
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
	}

	.clients__list {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	@media (width > 768px) {
		.clients {
			padding-top: 2rem;
		}

		.clients__header {
			flex-direction: row;
			margin-bottom: 1rem;
		}
	}
</style>
