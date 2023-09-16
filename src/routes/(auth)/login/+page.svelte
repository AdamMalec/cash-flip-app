<script lang="ts">
	let email: string;
	let password: string;
</script>

<h1>Login</h1>
<form>
	<div class="field">
		<label for="email">Email</label>
		<input type="text" name="email" id="email" required bind:value={email} />
	</div>

	<div class="field">
		<div class="field__wrapper">
			<label for="password">Password</label>
			<a href="/forgot-password">Forgot?</a>
		</div>
		<input type="password" name="password" id="password" required bind:value={password} />
	</div>

	<div class="field">
		<button type="submit">Login</button>
		<p>
			<a href="/signup">Don't have an account yet?</a>
		</p>
	</div>
</form>

<style>
	h1 {
		margin-bottom: 2rem;
		color: var(--color-accent);
	}

	.field {
		min-width: 19rem;
	}
	.field label {
		color: var(--color-accent);
	}

	.field__wrapper {
		display: flex;
		justify-content: space-between;
	}

	.field a {
    align-self: baseline;
    display: inline-block;
    padding: 0.1rem;
    padding-bottom: 0;
		font-size: 0.75rem;
		text-decoration: underline;
		color: var(--pico-primary-inverse);
    border-radius: 0.2rem;
	}

	.field a:hover {
		text-decoration: none;
	}

	.field a:focus-visible {
		color: var(--color-accent);
		text-decoration: none;
	}

	.field p {
		text-align: center;
	}

	button[type='submit'] {
		width: 100%;
		margin-top: 0.9rem;
		padding: 0.5rem 1rem;
		font-weight: bold;
		color: var(--color-black);
		background-color: var(--color-success-bg);
	}
</style>
