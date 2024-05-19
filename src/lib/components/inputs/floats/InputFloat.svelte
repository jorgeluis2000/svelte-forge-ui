<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { DEFAULT_THEME, DEFAULT_COLOR_HEX } from '$lib/constants/DefaultStyles.constants';
	import type { AutoCompleteInput } from '$lib/domains/types/AutoComplete.type';
	import type { RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import { cssVariables, getCustomStyle, setTypeAction } from '$lib/functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '$lib/constants/Styles.constants';
	import { DEFAULT_ROUNDED_SIZE, DEFAULT_TEXT_SIZE } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import '$lib/css/sizes.css';

	export let maxlength: number | null | undefined = null;
	export let autocomplete: AutoCompleteInput = 'off';
	export let nameInput: string;
	export let labelText: string;
	export let valueInput: string;
	export let className: string = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let rounded: RoundedSize = 'none';
	export let textSize: TextSize = 'base';
	export let required: boolean | null | undefined = false;
	export let pattern: string | null | undefined = null;
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	let dispatch = createEventDispatcher();
	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let colorText = useCss ? `var(--${theme}-500)` : listColors['500'];
	let colorBorder = useCss ? `var(--${theme}-600)` : listColors['600'];
	let ownTextSize = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;
	let ownRounded = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
</script>

<div
	use:cssVariables={{
		colorBorder,
		colorText
	}}
	class="content-input"
>
	<input
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
		use:setTypeAction={type}
		{autocomplete}
		{maxlength}
		id={nameInput}
		name={nameInput}
		placeholder=" "
		{required}
		{pattern}
		class={`input-fill ${ownRounded} ${className} peer`}
	/>
	<label for={nameInput} class={`label-fill ${ownTextSize} ${ownTextSize}`}>{labelText}</label>
</div>

<style lang="postcss">
	.content-input {
		@apply relative;
	}
	.label-fill {
		@apply absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] cursor-text bg-white px-2 peer-focus:z-0 peer-valid:z-0 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1;
	}

	.peer:focus ~ .label-fill {
		color: var(--colorText);
	}

	.input-fill:focus {
		border-color: var(--colorBorder);
	}

	.input-fill {
		@apply block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0;
	}
</style>
