<script lang="ts">
	import type { RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import { cssVariables, getCustomStyle } from '$lib/functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '$lib/constants/Styles.constants';
	import {
		DEFAULT_COLOR_HEX,
		DEFAULT_ROUNDED_SIZE,
		DEFAULT_TEXT_SIZE,
		DEFAULT_THEME
	} from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';

	export let valueText: string = '';
	export let rounded: RoundedSize = 'full';
	export let textSize: TextSize = 'base';
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let colorText = useCss ? `var(--${theme}-500)` : listColors['500'];
	let colorBorder = useCss ? `var(--${theme}-500)` : listColors['500'];

	const ownRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
	const ownTextSizeStyle = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
</script>

<div
	use:cssVariables={{
		colorBorder,
		colorText
	}}
	class={`content-tag ${ownRoundedStyle}`}
>
	<p class={`text-tag ${ownTextSizeStyle}`}>
		{valueText}
		<slot />
	</p>
</div>

<style lang="postcss">
	.content-tag {
		border-color: var(--colorBorder);
		@apply flex items-center justify-center px-4 py-1 h-5 bg-primary-100 border mx-1;
	}
	.text-tag {
		color: var(--colorText);
		@apply w-full font-medium truncate;
	}
</style>
