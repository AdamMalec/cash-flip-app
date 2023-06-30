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

		min-height: 4.8rem;
		min-width: 12.4rem;

		background-image: url('./images/circle.svg');
		background-repeat: no-repeat;

		float: right;
	}

	span:nth-child(1){
		font-weight: bold;
	}

	span:nth-child(2){
		font-family: monospace;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
