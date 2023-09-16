<script lang="ts">
	let email: string;
	let password: string;
</script>

<h1>Login</h1>
<form class="auth">
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
		<button class="auth__btn" type="submit">Login</button>
		<p><a href="/signup">Don't have an account yet?</a></p>
	</div>
</form>

<style>
	h1 {
		margin-bottom: 2rem;
		color: var(--color-accent);
	}

	.field__wrapper {
		display: flex;
		justify-content: space-between;
	}
</style>
