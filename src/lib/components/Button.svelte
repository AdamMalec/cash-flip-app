<script lang="ts">
	export let label: string;
	export let style: 'primary' | 'secondary' | 'destructive' | 'outline' | 'textOnly' | 'icon' =
		'primary';
	export let isAnimated = false;
	export let onClick: () => void;
</script>

<button
	class:primary={style === 'primary'}
	class:secondary={style === 'secondary'}
	class:destructive={style === 'destructive'}
	class:outline={style === 'outline'}
	class:text-only={style === 'textOnly'}
	class:icon={style === 'icon'}
	class:isAnimated
	type="button"
	on:click={() => onClick()}
>
	{label}
	<slot />
</button>

<style>
	button {
		margin-bottom: 0;
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
		transition: none;
	}

	.outline:hover {
		color: var(--pico-primary-inverse);
		background-color: var(--pico-primary);
	}

	.text-only {
		padding: 0.4rem;
		font: inherit;
		font-weight: bold;
		color: var(--pico-primary);
		background: none;
		border: none;
	}

	.text-only:hover {
		text-decoration: underline;
	}

	.icon {
		padding: 10px;
		font: inherit;
		color: var(--pico-primary-dim);
		background: none;
		border: none;
	}

	.icon:hover,
	.icon:focus {
		color: var(--pico-primary);
	}
</style>
