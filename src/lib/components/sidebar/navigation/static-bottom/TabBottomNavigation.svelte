<script lang="ts">
</script>

<section class="container">
	<nav class="container-navigation">
		<section class="navigation-content">
			<slot></slot>
		</section>
	</nav>
</section>

<style lang="postcss">
	.container {
		@apply transition-all duration-200 fixed w-full bottom-0 bg-transparent px-2 z-40;
	}
	.container-navigation {
		@apply my-3 w-full rounded-lg shadow-sm border bg-white border-gray-300 lg:hidden;
	}
	.navigation-content {
		@apply flex flex-wrap justify-around items-center w-full px-4 py-1.5 space-x-4;
	}
</style>
