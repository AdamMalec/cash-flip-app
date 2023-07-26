<script lang="ts">
	import { page } from '$app/stores';
	import IconBurger from '$lib/components//icons/IconBurger.svelte';
	import IconClose from '$lib/components//icons/IconClose.svelte';

	let isOpen = false;
</script>

<svelte:head>
	{#if isOpen}
		<style>
			body {
				overflow: hidden;
			}

			@media (width > 768px) {
				body {
					overflow: auto;
				}
			}
		</style>
	{/if}
</svelte:head>

<button class="btn" on:click={() => (isOpen = !isOpen)}>
	{#if isOpen}
		<IconClose width={42} height={42} color="var(--color-accent)" />
	{:else}
		<IconBurger width={42} height={42}/>
	{/if}
</button>

<header class="header" style:transform={isOpen ? 'translateX(0)' : ''}>
	<img class="header__logo" src="/favicon.png" alt="Application logotype" />
	<nav class="menu">
		<ul class="menu__list">
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/invoices'}
					href="/invoices">Invoices</a
				>
			</li>
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/clients'}
					href="/clients">Clients</a
				>
			</li>
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/setting'}
					href="#setting">Setting</a
				>
			</li>
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/logout'}
					href="#logout">Logout</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	.btn {
		position: fixed;
		z-index: var(--z-nav-toggle);
		top: 0;
		right: 0;

		color: var(--color);
		background-color: transparent;
		border: none;
	}

	.btn:focus {
		box-shadow: none;
	}

	.header {
		position: fixed;
		z-index: var(--z-nav);

		width: 100%;
		min-height: 100vh;
		background-color: var(--pico-primary-background);

		transform: translateX(-100%);
		transition-duration: 0.2s;
	}

	.header__logo {
		margin-inline: auto;
		padding-block: 2rem;
	}

	.menu__list {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.menu__link {
		font-weight: bold;
		color: rgb(245, 246, 247);
		text-decoration: none;
	}

	.menu__link:hover {
		color: var(--color-accent);
	}

	.menu__link--active {
		color: var(--color-accent);
	}

	.menu__link--active::before {
		content: '[';
		padding-right: 0.5rem;
		transition: padding-right 0.2s;
	}

	.menu__link--active::after {
		content: ']';
		padding-left: 0.5rem;
		transition: padding-left 0.2s;
	}

	.menu__link--active:hover::before {
		padding-right: 0.75rem;
	}

	.menu__link--active:hover::after {
		padding-left: 0.75rem;
	}

	@media (width > 768px) {
		.btn {
			display: none;
		}

		.header {
			position: relative;
			height: 100%;
			transform: translateX(0);
		}
	}
</style>
