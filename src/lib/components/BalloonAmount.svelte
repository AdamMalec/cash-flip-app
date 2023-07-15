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
		min-width: 15.8rem;

		background-image: url('./images/circle.svg');
		background-repeat: no-repeat;

		float: right;
	}

	span:nth-child(1) {
		/* font-size: 1rem; */
		font-weight: bold;
		color: var(--pico-primary);
	}

	span:nth-child(2) {
		padding-top: 0.1rem;
		font-family: monospace;
		font-size: 1.1rem;
		font-weight: bold;
	}

	@media (min-width: 768px) {
		div {
			min-height: 5.3rem;
			min-width: 15rem;
		}

		span:nth-child(2) {
			padding-top: 0.2rem;
		}
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
			min-width: 12.4rem;
		}
	}
</style>
