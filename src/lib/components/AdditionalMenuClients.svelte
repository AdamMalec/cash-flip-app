<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconEdit from '$lib/components/icons/IconEdit.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';
	import IconActive from './icons/iconActive.svelte';
	import IconArchive from './icons/iconArchive.svelte';

	export let client: Client;
	export let isAddMenuFullOptions: boolean;

	const dispatch = createEventDispatcher();

	const handleEdit = () => {
		dispatch('editClient');
    console.log('Edit...');
  }

	const handleActivate = () => {
		dispatch('activateClient', {'active': 'active'});
	}

  const handleArchive = () => {
		dispatch('archiveClient', {'archive': 'archive'});
	}

	const handleDelete = () => {
		dispatch('deleteClient');
		console.log('delete...');
	};
</script>

<ul class="menu">
	{#if isAddMenuFullOptions}
		<li class="menu__item">
			<button class="menu__btn" on:click={handleEdit}>
				<IconEdit />
				<span>Edit</span>
			</button>
		</li>

		{#if client.clientStatus !== 'active'}
			<li class="menu__item">
				<button class="menu__btn" on:click={handleActivate}>
					<IconActive />
					<span>Activate</span>
				</button>
			</li>
		{/if}

		{#if client.clientStatus !== 'archive'}
			<li class="menu__item">
				<button class="menu__btn" on:click={handleArchive}>
					<IconArchive />
					<span>Archive</span>
				</button>
			</li>
		{/if}

		<li class="menu__item">
			<button class="menu__btn" on:click={handleDelete}>
				<IconTrash />
				<span>Delete</span>
			</button>
		</li>
	{:else}
		<li class="menu__item">
			<button class="menu__btn" on:click={handleDelete}>
				<IconTrash />
				<span>Delete</span>
			</button>
		</li>
	{/if}
</ul>

<style>
	.menu {
		position: absolute;
		left: 0;
		top: 1.5rem;

		width: 142px;
		margin: 0;
		padding: 0.3rem 0;

		background: var(--pico-primary-inverse);
		border-radius: 8px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

		z-index: var(--z-pop-up-menu);
	}

	.menu__item {
		list-style: none;
	}

	.menu__btn {
		display: flex;
		align-items: center;
		column-gap: 0.2rem;

		width: 100%;
		padding: 0.4rem 0.6rem;

		font-weight: bold;
		color: var(--pico-primary-dim);
		background-color: transparent;
		border: none;
	}

	.menu__btn:hover {
		color: var(--pico-primary);
	}

	.menu__btn span {
		padding-left: 0.4rem;
	}
</style>
