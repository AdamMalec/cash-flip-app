<form class="search" method="POST">
	<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g style="mix-blend-mode:multiply">
			<path
				d="M22.414 19.586L18.455 15.627C19.439 14.108 19.973 12.339 19.973 10.486C19.973 7.953 18.987 5.57 17.194 3.779C15.402 1.987 13.02 1 10.486 1C7.952 1 5.57 1.987 3.779 3.778C1.987 5.57 1 7.953 1 10.486C1 13.02 1.987 15.403 3.779 17.194C5.57 18.986 7.953 19.972 10.486 19.972C12.34 19.972 14.108 19.44 15.627 18.455L19.586 22.414C19.964 22.792 20.466 23 21 23C21.534 23 22.036 22.792 22.414 22.414C22.792 22.037 23 21.535 23 21C23 20.465 22.792 19.963 22.414 19.586ZM5.193 15.778C3.779 14.365 3 12.486 3 10.486C3 8.486 3.779 6.607 5.193 5.194C6.607 3.779 8.486 3 10.486 3C12.486 3 14.365 3.779 15.779 5.194C17.193 6.607 17.972 8.486 17.972 10.486C17.972 12.486 17.193 14.365 15.779 15.779C14.365 17.194 12.486 17.972 10.486 17.972C8.486 17.972 6.607 17.194 5.193 15.778Z"
				fill="#AFA2B9"
			/>
		</g>
	</svg>
	<input type="text" name="search" placeholder="Search by keyword..." />
	<button>Search</button>
</form>

<style>
	.search {
		display: flex;
		align-items: center;
		width: 420px;
		margin-bottom: 1rem;
	}
	.search svg {
		align-self: center;
		padding-top: 0.3rem;
	}

	.search input {
		height: 2rem;
		margin-left: 0.4rem;
		margin-bottom: 0;
		padding: 0.5rem;
		border: none;
		border-bottom: 2px dashed var(--pico-primary);
		border-radius: 0;
	}
	.search input::placeholder {
		color: grey;
	}

	.search input:focus {
		border: none;
		border-bottom: 2px solid var(--pico-primary);
		box-shadow: none;
	}

	.search button {
		margin-left: 2px;
		padding: 0.5rem;
		font-weight: bold;
		color: var(--pico-primary);
		background-color: transparent;
		border: none;
	}
</style>
