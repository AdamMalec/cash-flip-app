<script lang="ts">
	import toast from 'svelte-french-toast';
</script>

<div class="page container-fluent">

	<div class="page__left">
    <img src="/favicon.png" alt="">
    <span>Cash<br>Peak</span>
  </div>

  <div class="page__right">
    <slot />
  </div>
</div>

<style>
	.page {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4rem;
    min-height: 100dvh;
    background-color:  var(--pico-primary);
	}

  .page__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .page__left span {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1;
    color: var(--color-accent);
  }

  @media (width < 576px)  {
    .page {
      flex-direction: column;
    }

    .page__left {
      margin-bottom: 3rem;
    }

    .page__left span {
      display: none;
    }
  }
</style>
