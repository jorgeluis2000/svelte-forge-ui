<script lang="ts">
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import type { GeneralSize, RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { cssVariables } from '$lib/functions/Styles.functions';
	import SuccessIcon from '$lib/icons/SuccessIcon.svelte';

	export let openSidebar = false;
	export let responsive: boolean = false;
	export let theme: string = DEFAULT_THEME;
	export let isFilled: boolean = false;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	const listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	const color500 = useCss ? `var(--${theme}-500)` : listColors['500'];
	const color600 = useCss ? `var(--${theme}-600)` : listColors['600'];
	const colorUseCss: string = isFilled
		? useCss
			? `var(--${theme}-500)`
			: listColors['500']
		: 'white';
	const colorUseCssHover: string = color600;
	const textColor = isFilled ? 'white' : useCss ? `var(--${theme}-500)` : listColors['500'];
	const colorBgLogo = isFilled ? 'white' : color500;
	const colorLogo = isFilled ? color500 : 'white';

	function eventTurnSidebar(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		event.preventDefault();
		openSidebar = !openSidebar;
	}
</script>

<aside
	use:cssVariables={{
		color: colorUseCss,
		textColor,
		colorUseCssHover,
		colorLogo,
		colorBgLogo
	}}
	class={`${responsive ? 'hidden lg:block' : 'block'} scroll-sidebar container ${openSidebar ? 'active' : 'desactive'} `}
>
	<section class="container-user container-data">
		<button type="button" on:click={eventTurnSidebar} class="container-logo">
			<slot name="logo">
				<SuccessIcon className="size-8" />
			</slot>
		</button>
		<article class="data">
			<slot name="info"></slot>
		</article>
	</section>
	<nav class="transition-all duration-500">
		<ul class="navbar">
			<slot name="body"></slot>
		</ul>
	</nav>
	<footer class="flex flex-col sticky top-[100vh] w-full mt-5 gap-y-2">
		<slot name="footer"></slot>
	</footer>
</aside>

<style lang="postcss">
	.container {
		background-color: var(--color);
		color: var(--textColor);
		@apply fixed h-screen min-w-[6rem] w-24 shadow-md overflow-hidden overflow-y-auto top-0 rounded-r-md transition-all duration-500 ease-in-out z-50;
	}
	.container.active {
		@apply w-[16.5rem];
	}

	.container.desactive {
		@apply w-24;
	}
	.scroll-sidebar {
		@apply scrollbar-none scrollbar-thumb-primary-700 scrollbar-track-primary-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full;
	}
	.container-data {
		container-type: inline-size;
		container-name: container-data;
	}
	.data {
		color: var(--textColor);
		@apply px-2;
	}
	@container container-data (max-width: 10rem) {
		.container-data > .data {
			@apply hidden;
		}
	}
	.navbar {
		@apply transition-all duration-500 flex flex-col items-center p-0 m-0 gap-y-2;
	}

	.inactive {
		@apply hidden w-0 opacity-0;
	}

	.activate {
		@apply block w-auto opacity-100;
	}

	.container-user {
		@apply transition-all duration-500 flex mb-6 mt-2 items-center justify-center;
	}

	.container-logo {
		color: var(--colorLogo);
		background-color: var(--colorBgLogo);
		&:hover {
			--tw-ring-color: var(--colorUseCssHover);
		}
		@apply transition-all duration-500 flex items-center justify-center min-w-[3rem] size-12 mx-4 mr-2 my-6 mt-10 overflow-hidden rounded-full font-semibold hover:ring-1;
	}

	.copyright {
		@apply text-xs text-gray-200 text-center mx-5;
	}
</style>
