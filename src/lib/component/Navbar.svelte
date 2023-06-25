<script>
	import { page } from '$app/stores';
</script>

<header class="header">
	<img class="header__logo" src="/favicon.png" alt="Application logotype" />
	<nav class="menu">
		<ul class="menu__list">
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/invoices'}
					href="/invoices">Invoices</a>
			</li>
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/clients'}
					href="/clients">Clients</a>
			</li>
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/setting'}
					href="#setting">Setting</a>
			</li>
			<li>
				<a
					class="menu__link"
					class:menu__link--active={$page.url.pathname === '/logout'}
					href="#logout">Logout</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.header__logo {
		margin-inline: auto;
		margin-block: 2rem;
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
</style>
