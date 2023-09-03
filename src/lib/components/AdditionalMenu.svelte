<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconEdit from '$lib/components/icons/IconEdit.svelte';
	import IconSend from '$lib/components/icons/IconSend.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';

	export let isAddMenuFullOptions: boolean;
	const dispatch = createEventDispatcher();

	const handleSend = () => console.log('send...');
	const handleEdit = () => {
		dispatch('editInvoice');
		console.log('edit...');
	}
	const handleDelete = () => {
		dispatch('deleteInvoice');
		console.log('delete...');
	};
</script>

<ul class="menu">
	{#if isAddMenuFullOptions}
		<li class="menu__item">
			<button class="menu__btn" on:click={handleSend}>
				<IconSend />
				<span>Send</span>
			</button>
		</li>
		<li class="menu__item">
			<button class="menu__btn" on:click={handleEdit}>
				<IconEdit />
				<span>Edit</span>
			</button>
		</li>
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

		width: 136px;
		margin: 0;
		padding: 0.3rem 0;

		background: #fff;
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
