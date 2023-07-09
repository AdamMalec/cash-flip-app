<script lang="ts">
	export let label: string = `Total`;
	export let amount: string = '$0.99';
</script>

<div>
	<span>{label}:&nbsp;&nbsp;</span>
	<span>{amount}</span>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 5.8rem;
		min-width: 13.8rem;

		background-image: url('./images/circle.svg');
		background-repeat: no-repeat;

		float: right;
	}

	@media (min-width: 1024px) {
		div {
			min-height: 5rem;
			min-width: 13.4rem;
		}
	}

	@media (min-width: 1280px) {
		div {
			min-height: 4.6rem;
			min-width: 13rem;
		}
	}

	span:nth-child(1) {
		font-weight: bold;
	}

	span:nth-child(2) {
		font-family: monospace;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
