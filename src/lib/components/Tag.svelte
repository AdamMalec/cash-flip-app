<script lang="ts">
	export let label: 'draft' | 'sent' | 'current' | 'late' | 'paid' | 'archive' = 'draft';
</script>

<span
	class:inverted={label === 'draft'}
	class:success={label === 'sent' || label === 'current'}
	class:alert={label === 'late'}
	class:archive={label === 'paid' || label === 'archive'}
>
	{label}
</span>

<style>
	span {
		display: inline-block;
		width: 4.5rem;
		padding-block: 1px;

		font-size: 18px;
		font-weight: bold;
		text-align: center;
		text-transform: capitalize;
		vertical-align: middle;

		border-radius: 1rem;
		border: 1px solid var(--pico-secondary);
	}

	@media (width < 1024px) {
		span {
			width: 5rem;
		}
	}

	.inverted {
		color: var(--pico-primary-dim);
		border: 1px solid var(--pico-primary-dim);
	}

	.success {
		color: var(--pico-primary-inverse);
		background-color: var(--color-success-bg);
		border: 1px solid var(--color-success-bg);
	}

	.alert {
		color: var(--pico-primary-inverse);
		background-color: var(--color-error-bg);
		border: 1px solid var(--color-error-bg);
	}

	.archive {
		color: var(--pico-primary-inverse);
		background-color: var(--pico-primary-dim);
		border: 1px solid var(--pico-primary-dim);
	}
</style>
