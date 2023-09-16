<script lang="ts">
	let email: string;
	let password: string;
</script>

<h1>Sign Up</h1>
<form class="auth">
	<div class="field">
		<label for="fullName">Full Name</label>
		<input type="text" name="fullName" id="fullName" required/>
	</div>

	<div class="field">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" required/>
	</div>

  <div class="field">
		<label for="password">Password</label>
		<input type="password" name="password" id="password" required/>
	</div>

  <div class="field">
		<label for="confirmPassword">Confirm Password</label>
		<input type="password" name="confirmPassword" id="confirmPassword" required/>
	</div>

	<div class="field">
		<button class="auth__btn" type="submit">Sign Up </button>
		<p>
			<a href="/signup">Already have an account?</a>
		</p>
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
