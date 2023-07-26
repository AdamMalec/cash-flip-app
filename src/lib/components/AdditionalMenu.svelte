<script lang="ts">
	import IconEdit from '$lib/components/icons/IconEdit.svelte';
	import IconSend from '$lib/components/icons/IconSend.svelte';
	import IconTrash from '$lib/components/icons/IconTrash.svelte';

	export let isAddMenuFull: boolean;

	const handleSend = () => console.log('send...');
	const handleEdit = () => console.log('edit...');
	const handleDelete = () => console.log('delete...');
</script>

<ul class="menu">
	{#if isAddMenuFull}
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
				<svg
					class="menu__icon"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.37817 19.1055C5.37817 20.1504 6.20062 21.0002 7.21195 21.0002H16.3808C17.3922 21.0002 18.2146 20.1504 18.2146 19.1055V7.73703H5.37817V19.1055ZM7.21195 9.63177H16.3808L16.3817 19.1055H7.21195V9.63177Z"
					/>
					<path
						d="M14.5471 4.89492V3.00018H9.04576V4.89492H3.54443V6.78966H20.0484V4.89492H14.5471Z"
					/>
					<path d="M10.8796 11.5265H9.04578V17.2107H10.8796V11.5265Z" />
					<path d="M14.547 11.5265H12.7133V17.2107H14.547V11.5265Z" />
				</svg>
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

		z-index: var(--z-modal);
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
		color: var(--pico-inv-color);
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
