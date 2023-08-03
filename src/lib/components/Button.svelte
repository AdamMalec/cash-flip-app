<script lang="ts">
	export let label: string;
	export let style: 'primary' | 'secondary' | 'destructive' | 'outline' = 'primary';
	export let isAnimated = true;
	export let onClick: () => void;
</script>

<button
	class:primary={style === 'primary'}
	class:secondary={style === 'secondary'}
	class:destructive={style === 'destructive'}
	class:outline={style === 'outline'}
	class:isAnimated
	on:click={() => onClick()}
>
	{label}
</button>

<style>
	button {
		padding: 0.5rem 1rem;
		font-weight: bold;
	}

	button:focus {
		outline: 4px solid var(--color-accent);
	}

	.isAnimated {
		transition: all 0.12s;
	}

	.isAnimated:hover {
		transform: translateY(-2px);
	}

	.primary {
		box-shadow: 0px 6px 14px rgba(140, 103, 213, 0.18);
	}

	.primary:hover {
		box-shadow: 0px 12px 22px rgba(140, 103, 213, 0.3);
	}

	.secondary {
		background-color: var(--pico-secondary-background);
		box-shadow: 0px 6px 14px rgba(82, 95, 122, 0.18);
	}

	.secondary:hover {
		background-color: var(--pico-secondary-hover-background);
		box-shadow: 0px 6px 14px rgba(82, 95, 122, 0.3);
	}

	.destructive {
		background-color: var(--color-error-bg);
		box-shadow: 0px 12px 22px rgba(223, 111, 125, 0.18);
	}

	.destructive:hover {
		color: #ffd37a;
		background-color: #e05a6a;
		box-shadow: 0px 12px 22px rgba(223, 111, 125, 0.3);
	}

	.destructive:focus {
		color: #ffd37a;
		background-color: #e05a6a;
	}

	.outline {
		color: var(--pico-primary);
		border: 2px solid var(--pico-primary);
	}

	.outline:hover {
		color: var(--pico-primary-inverse);
		background-color: var(--pico-primary);
	}
</style>
