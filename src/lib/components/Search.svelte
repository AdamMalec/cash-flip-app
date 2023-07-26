<script>
	import IconSearch from '$lib/components//icons/IconSearch.svelte';
</script>

<form class="search" method="POST">
	<IconSearch width={32} height={32}/>
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
	.search svg {
		align-self: center;
		padding-top: 0.3rem;
	}

	.search input {
		height: 2rem;
		margin-left: 0.4rem;
		margin-bottom: 0;
		padding: 0.5rem;
		border-width: 2px;
		border-color: transparent;
		border-bottom: dashed var(--pico-primary);
		border-radius: 0;
		transition: none;
	}

	.search input::placeholder {
		color: #b3b9c5;
	}

	.search input:focus {
		border: 2px dashed var(--color-accent);
		border-radius: 0.5rem;
		box-shadow: none;
		transition: all 0.2s;
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
