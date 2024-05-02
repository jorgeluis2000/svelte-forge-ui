<ul class="navbar">
	<slot />
</ul>

<style lang="postcss">
	.navbar {
		@apply transition-all duration-500 flex flex-col items-center p-0 m-0 gap-y-2;
	}
</style>
