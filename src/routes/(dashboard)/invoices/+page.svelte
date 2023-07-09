<script lang="ts">
	import BalloonAmount from '$lib/components/BalloonAmount.svelte';
	import Search from '$lib/components/Search.svelte';
	import Tag from '$lib/components/Tag.svelte';
</script>

<svelte:head>
	<title>Invoices | Cash FlipI</title>
</svelte:head>

<div class="invoices">
	<div class="invoices__header">
		<!-- search field -->
		<Search />

		<!-- new invoices -->
		<div>
			<button>+ Invoice</button>
		</div>
	</div>

	<!-- list of invoices -->
	<div class="invoices__content">
		<!-- titles header -->
		<ul class="invoices__content-header">
			<li>Status</li>
			<li>Due Date</li>
			<li>ID</li>
			<li>Client</li>
			<li>Amount</li>
			<li />
			<li />
		</ul>

		<!-- invoices list-->
		<ul class="invoices__list">
			<li class="invoices__item invoice">
				<ul class="invoice__info">
					<li class="invoice__status"><Tag label="draft" /></li>
					<li class="invoice__date">29/06/2023</li>
					<li class="invoice__id">12345</li>
					<li class="invoice__name">Jack Newman</li>
					<li class="invoice__amount">$420.00</li>
					<li class="invoice__view">
						<a href="/"
							><svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M24 11.5C24 11.5 18.9285 4 12 4C5.0715 4 0 11.5 0 11.5C0 11.5 5.0715 19 12 19C18.9285 19 24 11.5 24 11.5ZM12 16C9.5145 16 7.5 13.987 7.5 11.5C7.5 9.013 9.5145 7 12 7C14.484 7 16.5 9.013 16.5 11.5C16.5 13.987 14.484 16 12 16Z"
								/>
								<path
									d="M12 13C12.8284 13 13.5 12.3284 13.5 11.5C13.5 10.6716 12.8284 10 12 10C11.1716 10 10.5 10.6716 10.5 11.5C10.5 12.3284 11.1716 13 12 13Z"
								/>
							</svg></a
						>
					</li>
					<li class="invoice__more">
						<button>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="5" cy="12" r="2" />
								<circle cx="12" cy="12" r="2" />
								<circle cx="19" cy="12" r="2" />
							</svg>
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</div>

	<BalloonAmount label="Total" amount="$1.140.00" />
</div>

<style>
	.invoices {
		--grid-t-c: 100px 120px 60px 1fr 116px 32px 32px;
		--grid-t-c-mobile: 1fr 90px;
		--grid-c-g: 1rem;

		padding-top: 2rem;
	}

	.invoices__header {
		display: flex;
		justify-content: space-between;
	}

	.invoices__header button {
		padding: 0.5rem 1rem;
		box-shadow: 0px 6px 14px rgba(140, 103, 213, 0.18);
		transition: all 0.18s;
	}

	.invoices__header button:hover {
		transform: translateY(-2px);
		box-shadow: 0px 12px 22px rgba(140, 103, 213, 0.3);
	}

	.invoices__header button:focus {
		outline: solid var(--color-accent);
	}

	.invoices__content-header {
		display: grid;
		grid-template-columns: var(--grid-t-c-mobile);
		grid-column-gap: var(--grid-c-g);

		margin-top: 3rem;
		padding-inline: 1.5rem;

		font-weight: bold;
		color: var(--pico-primary-background);
	}

	.invoices__content-header li {
		list-style: none;
	}

	.invoices__list {
		margin: 0;
		padding: 0;
	}

	.invoice {
		margin-bottom: 1rem;
		padding: 1.5rem;
		list-style: none;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
	}

	.invoice__info {
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

	@media (min-width: 1024px) {
		.invoices__content-header {
			grid-template-columns: var(--grid-t-c);
		}

		.invoice__info {
			grid-template-columns: var(--grid-t-c);
			grid-template-areas: 'status date id name amount view more';
		}
	}

	.invoice__info li {
		list-style: none;
		font-size: 18px;
	}

	.invoice__status {
		grid-area: status;
	}

	.invoice__date {
		grid-area: date;
	}

	.invoice__id {
		grid-area: id;
	}

	.invoice__name {
		grid-area: name;
		font-size: 1rem;
		font-weight: bold;
	}

	.invoice__amount {
		grid-area: amount;
		font-family: monospace;
		font-size: 1rem;
		font-weight: bold;
	}

	.invoice__view {
		grid-area: view;
	}

	.invoice__more {
		grid-area: more;
	}

	.invoice__view,
	.invoice__more {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.invoice__view a,
	.invoice__more button {
		display: inline-block;
		padding: 0.2rem;
		color: var(--pico-inv-color);
		border-radius: var(--pico-border-radius);
	}

	.invoice__view a:hover,
	.invoice__view a:focus,
	.invoice__more button:hover,
	.invoice__more button:focus {
		color: var(--pico-primary);
	}

	.invoice__more button {
		padding: 0;
		background-color: transparent;
		border: none;
	}
</style>
