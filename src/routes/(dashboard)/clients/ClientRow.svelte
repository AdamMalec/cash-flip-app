<script lang="ts">
	import { clickOutside } from '$lib/actions/ClickOutside';
	import AdditionalMenuClients from '$lib/components/AdditionalMenuClients.svelte';
	import SlidePanel from '$lib/components/SlidePanel.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import IconEdit from '$lib/components/icons/IconEdit.svelte';
	import IconThreeDots from '$lib/components/icons/IconThreeDots.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import IconView from '$lib/components/icons/IconView.svelte';
	import IconCancel from '$lib/components/icons/IconCancel.svelte';
	import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelpers';
	import ClientForm from './ClientForm.svelte';
	import { swipe } from '$lib/actions/Swipe';
	import IconActive from '$lib/components/icons/iconActive.svelte';
	import IconArchive from '$lib/components/icons/iconArchive.svelte';

	export let client: Client;

	let isAddMenuOpen = false;
	let isModalShow = false;
	let isClientFormShow = false;
	let triggerReset = false;

	function handleEdit() {
		isClientFormShow = true;
		isAddMenuOpen = false;
	}

	function handleDelete() {
		isModalShow = true;
		isAddMenuOpen = false;
	}

	function handleActive(event: CustomEvent | MouseEvent) {
		isAddMenuOpen = false;
		event.type !== 'click'
		? client.clientStatus = event.detail.active
		: client.clientStatus = 'active';
	}

	function handleArchive(event: CustomEvent | MouseEvent) {
		isAddMenuOpen = false;
		event.type !== 'click'
		? client.clientStatus = event.detail.archive
		: client.clientStatus = 'archive';
	}

	const receivedInvoices = () => {
		if (client?.invoices) {
			const paidInvoices = client?.invoices?.filter((invoice) => invoice.invoiceStatus === 'paid');
			return sumInvoices(paidInvoices);
		}
		return 0;
	};

	const balanceInvoices = () => {
		if (client?.invoices) {
			const paidInvoices = client?.invoices?.filter((invoice) => invoice.invoiceStatus !== 'paid');
			return sumInvoices(paidInvoices);
		}
		return 0;
	};
</script>

<li class="clients__item client">
	<ul class="client__info" use:swipe={{triggerReset}} on:outOfView={() => {triggerReset=false}}>
		<li class="client__status"><Tag label={client.clientStatus} /></li>
		<li class="client__name">{client.name}</li>
		<li class="client__received">${centsToDollars(receivedInvoices())}</li>
		<li class="client__balance">${centsToDollars(balanceInvoices())}</li>
		<li class="client__view">
			<a href={`/clients/${client.id}`} title="Client Page">
				<IconView />
			</a>
		</li>
		<li class="client__more" use:clickOutside={() => {isAddMenuOpen = false}}>
			<button on:click={() => (isAddMenuOpen = !isAddMenuOpen)}>
				<IconThreeDots />
			</button>

			{#if isAddMenuOpen}
				<AdditionalMenuClients
					{client}

					on:editClient={handleEdit}
					on:deleteClient={handleDelete}
					on:activateClient={handleActive}
					on:archiveClient={handleArchive}
				/>
			{/if}
		</li>
	</ul>
	<ul class="client__options">
		<li class="client__option-item">
			<a href={`/clients/${client.id}`} class="client__option-btn"><IconView size={32}/>View</a>
		</li>
		<li class="client__option-item">
			<button class="client__option-btn" on:click={handleEdit}><IconEdit size={32}/>Edit</button>
		</li>
		{#if client.clientStatus !== 'active'}
			<li class="client__option-item">
				<button class="client__option-btn" on:click={handleActive}><IconActive size={32}/>Activate</button>
			</li>
		{/if}
		{#if client.clientStatus !== 'archive'}
		<li class="client__option-item">
			<button class="client__option-btn" on:click={handleArchive}><IconArchive size={32}/>Archive</button>
		</li>
	{/if}
		<li class="client__option-item">
			<button class="client__option-btn"on:click={handleDelete}><IconTrash size={32}/>Delete</button>
		</li>
		<li class="client__option-item">
			<button class="client__option-btn" on:click={() => {triggerReset = true}}><IconCancel size={32}/>Cancel</button>
		</li>
	</ul>
</li>

<!-- <ConfirmDelete {client} {isModalShow} on:close={() => (isModalShow = false)} /> -->

{#if isClientFormShow}
<SlidePanel on:closePanel={() => isClientFormShow = false}>
	<ClientForm {client} formState="edit" closePanel={() => isClientFormShow = false}/>
</SlidePanel>
{/if}

<style>
	.client {
		position: relative;
		margin-bottom: 1rem;
		list-style: none;
	}

	.client__info {
		position: relative;
		display: grid;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-template-areas:
			'name status'
			'received balance';
		grid-column-gap: var(--grid-c-g);
		align-items: center;

		margin: 0;
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
		background-color: var(--pico-primary-inverse);
		z-index: var(--z-row);
	}

	.client__view,
	.client__more {
		display: none;
	}

	.client__info li {
		list-style: none;
	}

	.client__status {
		grid-area: status;
		text-align: center;
	}

	.client__name {
		grid-area: name;
		grid-area: name;
		font-weight: bold;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.client__received {
		grid-area: received;
		font-family: monospace;
		font-size: 1rem;
		font-weight: bold;
		text-align: left;
	}

	.client__received::before {
		content: 'Received:';
		display: block;
		font-size: 0.875rem;
	}

	.client__balance {
		grid-area: balance;
		font-family: monospace;
		font-size: 1rem;
		font-weight: bold;
		text-align: right;
		color: var(--color-error);
	}

	.client__balance::before {
		content: 'Balance:';
		display: block;
		font-size: 0.875rem;
	}

	.client__status,
	.client__name,
	.client__view,
	.client__more {
		font-size: 0.875rem;
	}

	.client__view {
		grid-area: view;
	}

	.client__more {
		position: relative;

		grid-area: more;
	}

	.client__view a,
	.client__more button {
		display: inline-block;
		padding: 0.2rem;
		color: var(--pico-primary-dim);
		border-radius: var(--pico-border-radius);
	}

	.client__view a:hover,
	.client__view a:focus,
	.client__more button:hover,
	.client__more button:focus {
		color: var(--pico-primary);
	}

	.client__more button {
		background-color: transparent;
		border: none;
	}

	.client__options {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 0;
		padding: 0;
		list-style: none;
		z-index: var(--z-row-actions);
	}

	.client__option-item {
		min-width: 4rem;
		list-style: none;
	}

	.client__option-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;

		font-weight: bold;
		text-decoration: none;
		color: var(--pico-primary);
		border: none;
		background-color: transparent;
	}


	.client__option-btn:focus,
	.client__option-btn:focus-visible {
		box-shadow: none;
	}

	@media (width > 576px) {
		.client__option-item {
			min-width: 4.5rem;
		}
	}

	@media (width > 768px) {
		.client__option-item {
			min-width: 5rem;
		}
	}

	@media (width > 1024px) {
		.client__info {
			grid-template-columns: var(--grid-t-c);
			grid-template-areas: 'status name received balance view more';
		}

		.client__status {
			text-align: left;
		}

		.client__received {
			text-align: right;
		}

		.client__received,
		.client__balance {
			font-size: 0.875rem;
		}

		.client__received::before,
		.client__balance::before {
			display: none;
		}

		.client__view,
		.client__more {
			display: grid;
		}
	}

	@media (width > 1280px) {
		.client__info {
			padding: 1.5rem;
		}
	}
</style>
