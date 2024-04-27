<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { AutoCompleteInput } from '../../../domains/types/AutoComplete.type';
	import type { RoundedSize, TextSize } from '../../../domains/types/Sizes.type';
	import { getCustomStyle } from '../../../functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '../../../constants/Styles.constants';
	import {
		DEFAULT_ROUNDED_SIZE,
		DEFAULT_TEXT_SIZE
	} from '../../../constants/DefaultStyles.constants';

	export let maxlength: number | null | undefined = null;
	export let rows: number | null | undefined = 5;
	export let autocomplete: AutoCompleteInput = 'off';
	export let valueInput: string;
	export let nameInput: string;
	export let placeholder: string = '';
	export let className: string = '';
	export let rounded: RoundedSize = 'none';
	export let textSize: TextSize = 'base';
	export let required: boolean | null | undefined = false;

	const dispatch = createEventDispatcher();
	const ownTextSize = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
	const ownRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
</script>

<textarea
	id={nameInput}
	name={nameInput}
	{rows}
	{autocomplete}
	{maxlength}
	{placeholder}
	{required}
	class={`textarea-fill ${ownTextSize} ${ownRoundedStyle} ${className}`}
	bind:value={valueInput}
	on:input={(event) => dispatch('input', event)}
	on:blur={(event) => dispatch('blur', event)}
	on:change={(event) => dispatch('change', event)}
	on:focus={(event) => dispatch('focus', event)}
	on:focusin={(event) => dispatch('focusin', event)}
	on:focusout={(event) => dispatch('focusout', event)}
	on:keypress={(event) => dispatch('keypress', event)}
	on:keydown={(event) => dispatch('keydown', event)}
	on:keyup={(event) => dispatch('keyup', event)}
></textarea>

<style lang="postcss">
	.label-fill {
		@apply block mb-2 font-medium text-gray-900;
	}
	.textarea-fill {
		@apply block px-2.5 py-2.5 w-full text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600;
	}
</style>
