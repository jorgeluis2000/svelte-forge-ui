<script lang="ts">
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { cssVariables } from '$lib/functions/Styles.functions';

	export let responsive: boolean = false;
	export let theme: string = DEFAULT_THEME;
	export let isFilled: boolean = false;
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
	const textColor = isFilled ? 'white' : useCss ? `var(--${theme}-500)` : listColors['500'];
	const colorBg = isFilled ? 'white' : color500;
	const colorBgLight = isFilled ? color500 : 'white';
	const colorBorderLight = isFilled ? color300 : color100;
	const colorText = isFilled ? color700 : 'white';
</script>

<section
	use:cssVariables={{
		color100,
		color200,
		color300,
		color400,
		color700,
		color500,
		textColor,
		color600,
		colorBg,
		colorBgLight,
		colorText,
		colorBorderLight
	}}
	class="container"
>
	<nav class={`container-navigation ${responsive ? 'responsive' : ''}`}>
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
		background-color: var(--colorBgLight);
		border-color: var(--colorBorderLight);
		@apply my-3 w-full rounded-lg shadow-sm border;
	}

	.container-navigation.responsive {
		@apply lg:hidden;
	}
	.navigation-content {
		@apply flex flex-wrap justify-around items-center w-full px-4 py-1.5 space-x-4;
	}
</style>
