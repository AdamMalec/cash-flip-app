<script lang="ts">
	import AdditionalMenuClients from "$lib/components/AdditionalMenuClients.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import IconThreeDots from "$lib/components/icons/IconThreeDots.svelte";
	import IconView from "$lib/components/icons/IconView.svelte";

  export let client: Client;

  let isAddMenuOpen = false;
	let isAddMenuFullOptions = true;
	let isModalShow = false;
	let isClientFormShow = false;

  function handleEdit() {
		isClientFormShow = true;
		isAddMenuOpen = false;
	}

  function handleActive(event: CustomEvent) {
    isAddMenuOpen = false;
    client.clientStatus = event.detail.active;
  }

  function handleArchive(event: CustomEvent) {
    isAddMenuOpen = false;
    client.clientStatus = event.detail.archive;
  }
</script>
<li class="clients__item client">
	<ul class="client__info">
		<li class="client__status"><Tag label={client.clientStatus} /></li>
		<li class="client__name">{client.name}</li>
		<li class="client__received">$504.00</li>
		<li class="client__balance">$240.00</li>
		<li class="client__view">
			<a href="#">
				<IconView />
			</a>
		</li>
		<li class="client__more">
			<button on:click={() => (isAddMenuOpen = !isAddMenuOpen)}>
				<IconThreeDots />
			</button>

			{#if isAddMenuOpen}
				<AdditionalMenuClients
          {client}
					{isAddMenuFullOptions}
					on:editClient={handleEdit}
					on:deleteClient={() => {
						isModalShow = true;
						isAddMenuOpen = false;
					}}
          on:activateClient={handleActive}
          on:archiveClient={handleArchive}
				/>
			{/if}
		</li>
	</ul>
</li>

<style>
	.client {
		margin-bottom: 1rem;
		padding: 1rem;
		list-style: none;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
	}

	.client__info {
		display: grid;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-template-areas:
			'id id'
			'name amount'
			'date status';
		grid-column-gap: var(--grid-c-g);
		align-items: center;

		margin: 0;
		padding: 0;

		border-radius: 0.5rem;
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
    font-weight: bold;
    text-align: right;
	}

	.client__balance {
		grid-area: balance;
		font-family: monospace;
		font-weight: bold;
		text-align: right;
    color: var(--color-error);
	}

	.client__status,
	.client__name,
	.client__received,
	.client__balance,
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

	@media (width > 1024px) {
		.client {
			padding: 1.5rem;
		}

		.client__info {
			grid-template-columns: var(--grid-t-c);
			grid-template-areas: 'status name received balance view more';
		}

		.client__status {
			text-align: left;
		}

		.client__view,
		.client__more {
			display: grid;
		}
	}
</style>
