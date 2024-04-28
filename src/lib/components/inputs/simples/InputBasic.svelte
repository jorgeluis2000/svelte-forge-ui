<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import type { AutoCompleteInput } from '$lib/domains/types/AutoComplete.type';
	import type { RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import { cssVariables, getCustomStyle, setTypeAction } from '$lib/functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '$lib/constants/Styles.constants';
	import {
		DEFAULT_COLOR_HEX,
		DEFAULT_ROUNDED_SIZE,
		DEFAULT_TEXT_SIZE,
		DEFAULT_THEME
	} from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';

	export let maxlength: number | null | undefined = null;
	export let autocomplete: AutoCompleteInput = 'off';
	export let nameInput: string;
	export let labelText: string;
	export let valueInput: string;
	export let placeholder: string = '';
	export let className: string = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let rounded: RoundedSize = 'none';
	export let textSize: TextSize = 'base';
	export let required: boolean | null | undefined = false;
	export let pattern: string | null | undefined = null;
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	const dispatch = createEventDispatcher();
	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let colorBorder = useCss ? `var(--${theme}-600)` : listColors['600'];
	const ownTextSize = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
	const ownRoundedStyle = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
</script>

<label for={nameInput} class={`label-fill ${ownTextSize}`}>{labelText}</label>
<input
	use:cssVariables={{
		colorBorder
	}}
	class={`input-fill ${ownTextSize} ${ownRoundedStyle} ${className}`}
	name={nameInput}
	id={nameInput}
	use:setTypeAction={type}
	bind:value={valueInput}
	{pattern}
	on:input={(event) => dispatch('input', event)}
	on:blur={(event) => dispatch('blur', event)}
	on:change={(event) => dispatch('change', event)}
	on:focus={(event) => dispatch('focus', event)}
	on:focusin={(event) => dispatch('focusin', event)}
	on:focusout={(event) => dispatch('focusout', event)}
	on:keypress={(event) => dispatch('keypress', event)}
	on:keydown={(event) => dispatch('keydown', event)}
	on:keyup={(event) => dispatch('keyup', event)}
	{maxlength}
	{placeholder}
	{autocomplete}
	{required}
/>

<style lang="postcss">
	.label-fill {
		@apply block mb-2 font-medium text-gray-900;
	}
	.input-fill {
		&:focus {
			border-color: var(--colorBorder);
		}
		@apply block px-2.5 py-2.5 w-full text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0;
	}
</style>
