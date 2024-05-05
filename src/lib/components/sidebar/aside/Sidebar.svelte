<script lang="ts">
	import { CloseCircleIcon } from '$lib/icons';

	export let openSidebar = false;

	function eventCloseSidebar() {
		openSidebar = !openSidebar;
	}
</script>

<aside class={`content-aside-add scroll-style ${openSidebar ? 'active' : 'inactive'}`}>
	<section class="section-add">
		<button
			type="button"
			on:click|preventDefault={eventCloseSidebar}
			class="content-close-aside-add"
		>
			<CloseCircleIcon />
		</button>
		<section class="container-info">
			<slot></slot>
		</section>
	</section>
</aside>

<style lang="postcss">
	.content-aside-add {
		@apply fixed transition-all duration-700  overflow-auto h-screen top-0 right-0 shadow-lg bg-white z-50;
	}
	.scroll-style {
		@apply scrollbar-thin scrollbar-thumb-primary-700 scrollbar-track-primary-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full;
	}
	.content-aside-add.active {
		@apply w-full md:w-[28rem];
	}
	.content-aside-add.inactive {
		@apply w-0;
	}
	.content-close-aside-add {
		@apply transition-all duration-500 absolute size-8 top-5 left-3 cursor-pointer text-primary-700 hover:text-primary-800 active:text-primary-600;
	}
	.container-info {
		@apply flex flex-col px-3 pt-16 w-full;
	}
</style>
