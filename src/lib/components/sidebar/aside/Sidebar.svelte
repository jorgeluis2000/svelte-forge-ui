<script lang="ts">
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { cssVariables } from '$lib/functions/Styles.functions';
	import { CloseCircleIcon } from '$lib/icons';
	import type { TypePosition } from '$lib/domains/types/TypePosition.type';

	export let openSidebar = false;
	export let position: TypePosition = 'right';
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	const listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	const color100 = useCss ? `var(--${theme}-100)` : listColors['100'];
	const color200 = useCss ? `var(--${theme}-200)` : listColors['200'];
	const color300 = useCss ? `var(--${theme}-300)` : listColors['300'];
	const color400 = useCss ? `var(--${theme}-400)` : listColors['400'];
	const color500 = useCss ? `var(--${theme}-500)` : listColors['500'];
	const color600 = useCss ? `var(--${theme}-600)` : listColors['600'];
	const color700 = useCss ? `var(--${theme}-700)` : listColors['700'];

	function eventCloseSidebar() {
		openSidebar = !openSidebar;
	}
</script>

<aside
	use:cssVariables={{
		color100,
		color200,
		color300,
		color400,
		color500,
		color600,
		color700
	}}
	class={`content-aside ${position} scroll-style ${openSidebar ? 'active' : 'inactive'}`}
>
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
	.content-aside {
		@apply fixed transition-all duration-700 overflow-x-hidden overflow-y-auto h-screen shadow-lg drop-shadow-md bg-white z-50;
	}
	.content-aside.right {
		@apply top-0 right-0;
	}
	.content-aside.left {
		@apply top-0 left-0;
	}
	.content-aside.top {
		@apply top-0 w-full;
	}
	.content-aside.bottom {
		@apply bottom-0 w-full;
	}

	.scroll-style {
		--scrollbar-thumb: var(--color700) !important;
		--scrollbar-track: var(--color500) !important;
		@apply scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full;
	}
	.content-aside.right.active,
	.content-aside.left.active {
		@apply w-full md:w-[28rem];
	}

	.content-aside.right.inactive,
	.content-aside.left.inactive {
		@apply w-0;
	}
	.content-aside.top.active,
	.content-aside.bottom.active {
		@apply h-full md:h-[28rem] w-full;
	}
	.content-aside.top.inactive,
	.content-aside.bottom.inactive {
		@apply h-0;
	}
	.content-close-aside-add {
		color: var(--color500);
		&:hover {
			color: var(--color600);
		}
		&:active {
			color: var(--color400);
		}
		@apply transition-all duration-500 absolute size-8 top-5 left-3 cursor-pointer;
	}
	.container-info {
		@apply flex flex-col px-3 pt-16 w-full;
	}
</style>
