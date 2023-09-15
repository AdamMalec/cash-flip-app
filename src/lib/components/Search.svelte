<script>
	import IconSearch from '$lib/components//icons/IconSearch.svelte';
</script>

<form class="search" method="POST">
	<IconSearch size={32}/>
	<input type="text" name="search" placeholder="Search by keyword" />
	<button>Search</button>
</form>

<style>
	.search {
		display: flex;
		align-items: center;
		min-width: 320px;
		width: 100%;
		margin-block: 2rem;
	}

	.search input {
		height: 48px;
		margin-left: 0.25rem;
		margin-bottom: 0;
		padding: 12px 8px;
		border: none;
		border-bottom: 0.1875rem dashed var(--pico-primary);
		transition: outline 0.1s ease-in-out;
	}

	.search input::placeholder {
		color: #b3b9c5;
	}

	.search input:focus {
		border-bottom-color: transparent;
		border-radius: 0.5rem;
		outline: 0.1875rem solid var(--color-accent);
	}

	.search input:active {
		box-shadow: none;
	}

	.search button {
		margin-left: 2px;
		padding: 0.5rem;
		font-weight: bold;
		color: var(--pico-primary);
		background-color: transparent;
		border: none;
	}

	@media (width > 768px) {
		.search {
			width: 40%;
			margin: 0;
		}
	}
</style>
