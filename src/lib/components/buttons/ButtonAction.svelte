<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ROUNDED_STYLE, SIZE_STYLE, TEXT_SIZE_STYLE } from '$lib/constants/Styles.constants';
	import {
		DEFAULT_COLOR_HEX,
		DEFAULT_ROUNDED_SIZE,
		DEFAULT_SIZE,
		DEFAULT_TEXT_SIZE,
		DEFAULT_THEME
	} from '$lib/constants/DefaultStyles.constants';
	import {
		cssVariables,
		getCustomStyle,
		setTypeActionButton
	} from '$lib/functions/Styles.functions';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import type { GeneralSize, RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import type { TypeButton } from '$lib/domains/types/TypeButton.type';

	export let theme: string = DEFAULT_THEME;
	export let isFilled: boolean = false;
	export let className: string = '';
	export let textSize: TextSize = 'base';
	export let rounded: RoundedSize = 'none';
	export let sizeIcon: GeneralSize = 'base';
	export let thereIsIcon: boolean = false;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;
	export let type: TypeButton = 'button';

	const listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	const colorUseCss: string = useCss ? `var(--${theme}-500)` : listColors['500'];
	const colorText = isFilled ? 'white' : colorUseCss;
	const styleSizeIcon = getCustomStyle(SIZE_STYLE, sizeIcon, DEFAULT_SIZE).class;
	const styleRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
	const styleTextSize = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
	const dispatch = createEventDispatcher();
</script>

<section class="container">
	<button
		use:setTypeActionButton={type}
		use:cssVariables={{
			color: colorUseCss,
			textColor: colorText
		}}
		class={`btn ${thereIsIcon ? 'responsive' : ''} ${isFilled ? 'filled' : ''} ${styleRoundedStyle} ${styleTextSize} ${className}`}
		on:click={(event) => dispatch('click', event)}
	>
		<div class={`${thereIsIcon ? 'btn-icon' : 'hidden'} ${styleSizeIcon}`}>
			<slot name="icon" />
		</div>
		<div class="text">
			<slot />
		</div>
	</button>
</section>

<style lang="postcss">
	.btn {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		color: var(--textColor);
		border-color: var(--color);
		@apply flex px-4 py-2 border-2 h-auto justify-center items-center w-full space-x-1.5 bg-white shadow-sm hover:shadow-lg hover:scale-105 active:scale-95;
	}

	.btn-icon {
		@apply block;
	}

	.btn.filled {
		background-color: var(--color);
	}

	@container container (max-width: 18rem) {
		.btn.responsive > .text {
			@apply hidden;
		}
	}

	.container {
		container-type: inline-size;
		container-name: container;
	}
</style>
