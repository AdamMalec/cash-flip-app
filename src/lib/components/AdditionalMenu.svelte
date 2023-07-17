<script lang="ts">
	export let isAddMenuFull: boolean;

	const handleSend = () => console.log('send...');
	const handleEdit = () => console.log('edit...');
	const handleDelete = () => console.log('delete...');
</script>

<ul class="menu">
	{#if isAddMenuFull}
		<li class="menu__item">
			<button class="menu__btn" on:click={handleSend}>
				<svg
					class="menu__icon"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.01 21.0002L23 12.0002L2.01 3.00024L2 10.0002L17 12.0002L2 14.0002L2.01 21.0002Z"
					/>
				</svg>
				<span>Send</span>
			</button>
		</li>
		<li class="menu__item">
			<button class="menu__btn" on:click={handleEdit}>
				<svg
					class="menu__icon"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.821 3.179C20.061 2.418 19.049 2 17.974 2C16.9 2 15.888 2.418 15.128 3.179L3.71905 14.587C3.71905 14.587 3.71805 14.59 3.71605 14.591C3.63505 14.673 3.49705 14.889 3.45505 15.052L2.03005 20.756C1.94405 21.096 2.04505 21.458 2.29305 21.705L2.29405 21.706L2.29505 21.707C2.54305 21.955 2.90305 22.056 3.24405 21.971L8.94805 20.544C9.11105 20.502 9.32805 20.364 9.40905 20.283C9.41005 20.282 9.41305 20.28 9.41305 20.28L20.822 8.873C21.582 8.112 22.001 7.102 22 6.026C22 4.951 21.582 3.94 20.822 3.179H20.821ZM14.411 6.728L17.274 9.591L8.70605 18.159L5.84305 15.296L14.411 6.728ZM4.37505 19.626L4.97005 17.252L6.75005 19.033L4.37505 19.626ZM19.409 4.594C20.173 5.359 20.173 6.693 19.409 7.458L18.69 8.178L15.824 5.313L16.545 4.594C17.31 3.83 18.644 3.829 19.409 4.594Z"
					/>
				</svg>
				<span>Edit</span>
			</button>
		</li>
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
