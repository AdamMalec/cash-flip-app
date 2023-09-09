<script lang="ts">
  import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
</script>

<svelte:head>
  <title>Error | Cash Peek</title>
</svelte:head>

<div class="container-fluid error">
  <h1>{$page.status}</h1>
  <h2>Sorry!</h2>
  <p>{$page?.error?.message} <span>{$page.url}</span></p>
</div>

<style>
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    text-align: center;
    overflow: hidden;
  }

  h1 {
    font-size: 6rem;
    margin-bottom: 0;
    color: var(--pico-primary-hover);
  }

  h2 {
    margin-bottom: 0.2rem;
    color: var(--pico-primary-hover);
  }

  span {
    text-decoration: underline;
    color: var(--pico-primary-hover);
  }
</style>
