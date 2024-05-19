<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import {
		DEFAULT_COLOR_HEX,
		DEFAULT_ROUNDED_SIZE,
		DEFAULT_SIZE,
		DEFAULT_THEME
	} from '$lib/constants/DefaultStyles.constants';
	import type { GeneralSize, RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import type { TypeButton } from '$lib/domains/types/TypeButton.type';
	import {
		cssVariables,
		getCustomStyle,
		setTypeActionButton
	} from '$lib/functions/Styles.functions';
	import { ROUNDED_STYLE, SIZE_STYLE } from '$lib/constants/Styles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import '$lib/css/sizes.css';

	export let isFilled: boolean = false;
	export let className: string = '';
	export let sizeIcon: GeneralSize = 'sm';
	export let theme: string = DEFAULT_THEME;
	export let btnSize: GeneralSize = 'base';
	export let rounded: RoundedSize = 'full';
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;
	export let type: TypeButton = 'button';

	const listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	const colorUseCss: string = useCss ? `var(--${theme}-500)` : listColors['500'];
	const colorUseCssHover: string = useCss ? `var(--${theme}-600)` : listColors['600'];
	const colorUseCssActive: string = useCss ? `var(--${theme}-400)` : listColors['400'];
	const colorText = isFilled ? 'white' : colorUseCss;
	const styleSizeIcon = getCustomStyle(SIZE_STYLE, sizeIcon, DEFAULT_SIZE).class;
	const styleRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
	const styleTextSize = getCustomStyle(SIZE_STYLE, btnSize, DEFAULT_SIZE).class;
	const dispatch = createEventDispatcher();
</script>

<button
	use:setTypeActionButton={type}
	use:cssVariables={{
		colorText,
		colorUseCss,
		colorUseCssHover,
		colorUseCssActive
	}}
	class={`btn ${isFilled ? 'filled' : 'not-filled'} ${styleTextSize} ${styleRoundedStyle} ${className}`}
	on:click={(event) => {
		event.preventDefault();
		dispatch('click');
	}}
>
	<div class={`${styleSizeIcon}`}>
		<slot />
	</div>
</button>

<style lang="postcss">
	.btn {
		color: var(--colorText);
		@apply transition-colors duration-300 flex justify-center items-center;
	}

	.btn.filled {
		background-color: var(--colorUseCss);
	}

	.btn.filled:hover {
		background-color: var(--colorUseCssHover);
	}

	.btn.filled:active {
		background-color: var(--colorUseCssHover);
		background-color: var(--colorUseCssActive);
	}

	.btn.not-filled:hover {
		color: white;
		background-color: var(--colorUseCss);
	}
</style>
