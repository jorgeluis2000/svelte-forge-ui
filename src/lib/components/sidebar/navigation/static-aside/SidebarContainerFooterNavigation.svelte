<footer class="container">
	<slot></slot>
</footer>

<style lang="postcss">
	.container {
		@apply flex flex-col sticky top-[100vh] w-full mt-5 gap-y-2;
	}
</style>
