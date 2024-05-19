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

	.text-xs {
		font-size: 0.75rem /* 12px */;
		line-height: 1rem /* 16px */;
	}

	.text-sm {
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
	}

	.text-base {
		font-size: 1rem /* 16px */;
		line-height: 1.5rem /* 24px */;
	}

	.text-lg {
		font-size: 1.125rem /* 18px */;
		line-height: 1.75rem /* 28px */;
	}

	.text-xl {
		font-size: 1.25rem /* 20px */;
		line-height: 1.75rem /* 28px */;
	}

	.text-2xl {
		font-size: 1.5rem /* 24px */;
		line-height: 2rem /* 32px */;
	}

	.text-3xl {
		font-size: 1.875rem /* 30px */;
		line-height: 2.25rem /* 36px */;
	}

	.text-4xl {
		font-size: 2.25rem /* 36px */;
		line-height: 2.5rem /* 40px */;
	}

	.text-5xl {
		font-size: 3rem /* 48px */;
		line-height: 1;
	}

	.text-6xl {
		font-size: 3.75rem /* 60px */;
		line-height: 1;
	}

	.text-7xl {
		font-size: 4.5rem /* 72px */;
		line-height: 1;
	}

	.text-8xl {
		font-size: 6rem /* 96px */;
		line-height: 1;
	}

	.text-9xl {
		font-size: 8rem /* 128px */;
		line-height: 1;
	}

	/* Rounded */

	.rounded-none {
		border-radius: 0px;
	}

	.rounded-sm {
		border-radius: 0.125rem /* 2px */;
	}

	.rounded {
		border-radius: 0.25rem /* 4px */;
	}

	.rounded-md {
		border-radius: 0.375rem /* 6px */;
	}

	.rounded-lg {
		border-radius: 0.5rem /* 8px */;
	}

	.rounded-xl {
		border-radius: 0.75rem /* 12px */;
	}

	.rounded-2xl {
		border-radius: 1rem /* 16px */;
	}

	.rounded-3xl {
		border-radius: 1.5rem /* 24px */;
	}

	.rounded-full {
		border-radius: 9999px;
	}

	/* Size w and h */

	.size-2\.5 {
		width: 0.625rem /* 10px */;
		height: 0.625rem /* 10px */;
	}

	.size-5 {
		width: 1.25rem /* 20px */;
		height: 1.25rem /* 20px */;
	}

	.size-6 {
		width: 1.5rem /* 24px */;
		height: 1.5rem /* 24px */;
	}

	.size-8 {
		width: 2rem /* 32px */;
		height: 2rem /* 32px */;
	}

	.size-14 {
		width: 3.5rem /* 56px */;
		height: 3.5rem /* 56px */;
	}

	.size-16 {
		width: 4rem /* 64px */;
		height: 4rem /* 64px */;
	}
</style>
