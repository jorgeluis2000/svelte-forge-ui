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
