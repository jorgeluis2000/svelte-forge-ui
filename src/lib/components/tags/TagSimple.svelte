<script lang="ts">
	import type { RoundedSize, TextSize } from '../../domains/types/Sizes.type';
	import { getRoundedStyle, getTextSizeStyle } from '../../functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '../../constants/Styles.constants';

	export let valueText: string = '';
	export let bgColorHex: string = '';
	export let borderColorHex: string = '';
	export let textColorHex: string = '';
	export let rounded: RoundedSize = 'full';
	export let textSize: TextSize = 'base';

	const bgColorClass = `bg-[${bgColorHex}]`;
	const borderColorClass = `bg-[${borderColorHex}]`;
	const textColorClass = `bg-[${textColorHex}]`;
</script>

<div class={`content-tag ${getRoundedStyle(ROUNDED_STYLE, rounded).class}`}>
	<p class={`text-tag ${getTextSizeStyle(TEXT_SIZE_STYLE, textSize).class}`}>
		{valueText}
		<slot />
	</p>
</div>

<style lang="postcss">
	.content-tag {
		@apply flex items-center justify-center px-4 py-1 h-5 bg-primary-100 border border-primary-500 mx-1;
	}
	.text-tag {
		@apply w-full font-medium text-primary-500 truncate;
	}
</style>
