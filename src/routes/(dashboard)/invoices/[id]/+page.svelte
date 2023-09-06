<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	function printInvoice() {
		console.log('Print Invoice ...');
	}
	function copyLink() {
		console.log('Copy Link ...');
	}
	function sendInvoice() {
		console.log('Send Invoice ...');
	}
	function payInvoice() {
		console.log('Pay Invoice ...');
	}
</script>

<div class="invoice">
	<div class="invoice__header">
		<h1 class="invoice__title">Invoice</h1>
		<ul class="invoice__actions">
			<li><Button label="Print" height="short" style="outline" onClick={printInvoice} /></li>
			<li><Button label="Copy Link" height="short" isAnimated={true} onClick={copyLink} /></li>
			<li><Button label="Send" height="short" isAnimated={true} onClick={sendInvoice} /></li>
			<li><Button label="Pay Invoice" height="short" isAnimated={true} onClick={payInvoice} /></li>
		</ul>
	</div>

	<div class="invoice__body">
		<div class="invoice__image">
			<img
				src="/images/logo-compressed-fm.png"
				srcset="/images/logo-compressed-fm@2x.png 2x, /images/logo-compressed-fm.png 1x"
				alt="Compressed.fm"
			/>
		</div>

		<div class="invoice__holder">
			<span class="invoice__label">From</span>
			<p>
				Amy Dutton<br />
				123 Awesome Street<br />
				Coolville, TN 54321
			</p>
		</div>

		<div class="invoice__client">
			<span class="invoice__label">Client</span>
			<p>
				<strong>ZEAL</strong><br />
				zeal@example.com<br />
				789 Stellar Street<br />
				Anywhereville, CA 56789
			</p>
		</div>

		<div class="invoice__id">
			<span class="invoice__label">Invoice ID</span>
			<p>12348</p>
		</div>

		<div class="invoice__due-data">
			<span class="invoice__label">Due Date</span>
			<p>10 / 6 / 2022</p>
		</div>

		<div class="invoice__issue-data">
			<span class="invoice__label">Issue Date</span>
			<p>7 / 6 / 2022</p>
		</div>

		<div class="invoice__subject">
			<span class="invoice__label">Subject</span>
			<p>Website</p>
		</div>

		<div class="invoice__items">
			<!-- Line Items -->
		</div>

		<div class="invoice__notes">
			<span class="invoice__label">Notes</span>
			<p>lorem ipsum</p>
		</div>

		<div class="invoice__terms">
			<span class="invoice__label">Terms and Conditions</span>
			<p>lorem ipsum</p>
		</div>
	</div>
</div>

<style>
	.invoice__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 1.2rem 0.8rem;
	}

	.invoice__title {
		color: var(--pico-primary);
	}

	.invoice__actions {
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.invoice__actions li {
		list-style: none;
	}

	.invoice__body {
    display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		row-gap: 1rem;
		padding: 4rem 6rem;
		background-color: var(--pico-primary-inverse);
		border-radius: 4px;
		box-shadow: -2px 0px 26px 0px rgba(0, 0, 0, 0.25);
	}

  .invoice__label {
    font-weight: 900;
    color: var(--pico-secondary-background);
  }

  .invoice__image {
    grid-column: span 3;
  }

  .invoice__holder {
    grid-column: 5/ span 2;
    padding-top: 1rem;
  }

  .invoice__client {
    grid-column: span 3;
  }

  .invoice__id{
    grid-column: 5/ span 2;
  }

  .invoice__due-data {
    grid-column: span 3;
  }

  .invoice__issue-data {
    grid-column: 5/ span 2;
  }

  .invoice__subject {
    grid-column: span 6;
  }

  .invoice__items{
    grid-column: span 6;
  }

  .invoice__notes{
    grid-column: span 6;
  }

  .invoice__terms{
    grid-column: span 6;
  }


</style>
