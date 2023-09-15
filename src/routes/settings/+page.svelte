<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { states } from '$lib/utils/states';
</script>

<div class="page container-fluent">
	<div class="page__header">
		<Navbar />
	</div>

	<main class="page__content">
		<h2>Invoice Details</h2>
    <p>This information will be included on each invoice.</p>

    <form on:submit|preventDefault={() => {}}>
      <div class="field name">
        <label for="name">Client Name</label>
        <input type="text" name="name" id="name" required />
      </div>

      <div class="field address">
        <label for="address">Address</label>
        <input type="text" name="address" id="address" />
      </div>

      <div class="field city">
        <label for="city">City</label>
        <input type="text" name="city" id="city" />
      </div>

      <div class="field state">
        <label for="state">State</label>
        <select name="state" id="state">
          <option />
          {#each states as state}
            <option value={state.value}>{state.name}</option>
          {/each}
        </select>
      </div>

      <div class="field zip">
        <label for="zip">Zip</label>
        <input type="text" name="zip" id="zip" minlength="5" />
      </div>

      <button type="submit">Save</button>
    </form>

    <h2>Update Account Information</h2>
    <p>This information will be used to access your account.</p>

    <form on:submit|preventDefault={() => {}}>
      <div class="field email">
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div class="field password-cur">
        <label for="currentPassword">Current Password</label>
        <input type="password" name="currentPassword" id="currentPassword" required />
      </div>

      <div class="field password-new">
        <label for="newPassword">New Password</label>
        <input type="password" name="newPassword" id="newPassword" required />
      </div>

      <div class="field password-conf">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" required />
      </div>

      <button type="submit">Save</button>
    </form>

	</main>
</div>

<style>
	.page {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	.page__content {
		grid-column: 1 / -1;
		padding-inline: 1rem;
	}

  form {
    display:grid;
    grid-template-columns:repeat(6, minmax(0, 1fr));
    column-gap:1rem
  }

  .name,
	.address {
		grid-column: span 6 / span 6;
	}

	.city,
	.state,
	.zip {
		grid-column: span 2 / span 2;
	}

  .email,
  .password-cur,
  .password-new,
  .password-conf {
    grid-column: span 3 / span 3;
  }

  button[type='submit'] {
    grid-column-start: 6;
		margin-bottom: 0;
		padding: 0.5rem 1rem;
		font-weight: bold;
	}

	@media (width > 768px) {
		.page {
			grid-column-gap: 4rem;
		}

		.page__header {
			grid-column: span 3 / span 3;
		}

		.page__content {
			grid-column: span 8 / span 8;
		}
	}
</style>
