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
	export let autocomplete: AutoCompleteInput = 'off';
	export let nameInput: string;
	export let labelText: string;
	export let valueInput: string;
	export let className: string = '';
	export let rounded: RoundedSize = 'none';
	export let textSize: TextSize = 'base';
	export let required: boolean | null | undefined = false;

	const ownRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
	const ownTextSizeStyle = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
	const dispatch = createEventDispatcher();
</script>

<div class="content-input">
	<textarea
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
		{autocomplete}
		{maxlength}
		id={nameInput}
		name={nameInput}
		placeholder=" "
		{required}
		class={`textarea-fill ${ownRoundedStyle} ${className} peer`}
	/>
	<label for={nameInput} class={`label-fill ${ownRoundedStyle} ${ownTextSizeStyle}`}
		>{labelText}</label
	>
</div>

<style lang="postcss">
	.content-input {
		@apply relative;
	}
	.label-fill {
		@apply absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] cursor-text bg-white px-2 peer-focus:z-0 peer-valid:z-0 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1;
	}
	.textarea-fill {
		@apply block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600;
	}
</style>
