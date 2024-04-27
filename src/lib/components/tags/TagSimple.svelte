<script lang="ts">
	import type { RoundedSize, TextSize } from '../../domains/types/Sizes.type';
	import { getCustomStyle } from '../../functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '../../constants/Styles.constants';
	import { DEFAULT_ROUNDED_SIZE, DEFAULT_TEXT_SIZE } from '../../constants/DefaultStyles.constants';

	export let valueText: string = '';
	// // export let colorHex: string = '';
	export let rounded: RoundedSize = 'full';
	export let textSize: TextSize = 'base';

	const ownRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
	const ownTextSizeStyle = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
</script>

<div class={`content-tag ${ownRoundedStyle}`}>
	<p class={`text-tag ${ownTextSizeStyle}`}>
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
