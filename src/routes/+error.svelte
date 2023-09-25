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
  <p>{$page?.error?.message}</p>
  <span>{$page.url}</span>
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

    background-image: url('/images/bg-404.svg');
    background-repeat: no-repeat;
    background-position: 50% 45%;
  }

  h1 {
    margin-top: 3rem;
    margin-bottom: 0;
    font-size: 7rem;
    line-height: 1;
    color: var(--pico-primary-hover);
  }

  h2 {
    margin-bottom: 0.2rem;
    color: var(--pico-primary-hover);
  }

  p {
    margin: 0;
  }

  span {
    text-decoration: underline;
    color: var(--pico-primary-hover);
  }
</style>
