<script lang="ts">
	import { page } from '$app/stores';

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
		<svg
			width="42"
			height="42"
			viewBox="0 0 24 24"
			style:color="var(--color-accent)"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.4099 12.0002L19.7099 5.71019C19.8982 5.52188 20.004 5.26649 20.004 5.00019C20.004 4.73388 19.8982 4.47849 19.7099 4.29019C19.5216 4.10188 19.2662 3.99609 18.9999 3.99609C18.7336 3.99609 18.4782 4.10188 18.2899 4.29019L11.9999 10.5902L5.70994 4.29019C5.52164 4.10188 5.26624 3.99609 4.99994 3.99609C4.73364 3.99609 4.47824 4.10188 4.28994 4.29019C4.10164 4.47849 3.99585 4.73388 3.99585 5.00019C3.99585 5.26649 4.10164 5.52188 4.28994 5.71019L10.5899 12.0002L4.28994 18.2902C4.19621 18.3831 4.12182 18.4937 4.07105 18.6156C4.02028 18.7375 3.99414 18.8682 3.99414 19.0002C3.99414 19.1322 4.02028 19.2629 4.07105 19.3848C4.12182 19.5066 4.19621 19.6172 4.28994 19.7102C4.3829 19.8039 4.4935 19.8783 4.61536 19.9291C4.73722 19.9798 4.86793 20.006 4.99994 20.006C5.13195 20.006 5.26266 19.9798 5.38452 19.9291C5.50638 19.8783 5.61698 19.8039 5.70994 19.7102L11.9999 13.4102L18.2899 19.7102C18.3829 19.8039 18.4935 19.8783 18.6154 19.9291C18.7372 19.9798 18.8679 20.006 18.9999 20.006C19.132 20.006 19.2627 19.9798 19.3845 19.9291C19.5064 19.8783 19.617 19.8039 19.7099 19.7102C19.8037 19.6172 19.8781 19.5066 19.9288 19.3848C19.9796 19.2629 20.0057 19.1322 20.0057 19.0002C20.0057 18.8682 19.9796 18.7375 19.9288 18.6156C19.8781 18.4937 19.8037 18.3831 19.7099 18.2902L13.4099 12.0002Z"
			/>
		</svg>
	{:else}
		<svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
			/>
		</svg>
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

	.menu__link:hover,
	.menu__link:focus {
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
