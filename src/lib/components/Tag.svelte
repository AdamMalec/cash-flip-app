<script lang="ts">
	export let label: 'draft' | 'sent' |'current' |'late' |'paid' | 'archive' = 'draft';
</script>

<span
	class:inverted={label === 'draft'}
	class:success={label === 'sent' || label === 'current'}
	class:alert={label === 'late'}
	class:archive={label === 'paid'}
>
	{label}
</span>

<style>
	span {
		display: inline-block;
		width: 4.5rem;

		font-size: 18px;
		font-weight: bold;
		text-align: center;
		text-transform: capitalize;
		vertical-align: middle;

		border-radius: 1rem;
	}

	.inverted {
		color: var(--pico-inv-color);
		border: 1px solid var(--pico-inv-color);
	}

	.success {
		color: var(--pico-primary-background);
		background-color: var(--pico-suc-color);
		border: 1px solid var(--pico-suc-color);
	}

	.alert {
		color: var(--pico-primary-inverse);
		background-color: var(--pico-err-color);
		border: 1px solid var(--pico-err-color);
	}

	.archive {
		color: var(--pico-primary-inverse);
		background-color: var(--pico-inv-color);
		border: 1px solid var(--pico-inv-color);
	}
</style>
