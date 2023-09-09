<svelte:head>
  <title>Thank You | Cash Peek</title>
</svelte:head>

<div class="container-fluid thanks">
  <h1>Thank You!</h1>
  <p>Your payment has been received.</p>
</div>

<style>
  .thanks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
  }

  h1 {
    margin-bottom: 0.2rem;
    color: var(--pico-primary-hover);
  }
</style>
