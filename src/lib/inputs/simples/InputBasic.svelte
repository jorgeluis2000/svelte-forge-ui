<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import type { AutoCompleteInput } from './../../domains/types/AutoComplete.type';
	import type { RoundedSize } from './../../domains/types/Sizes.type';
	import { getRoundedStyle } from './../../functions/Styles.functions';
	import { ROUNDED_STYLE } from './../../constants/Styles.constants';

	export let maxlength: number | null | undefined = null;
	export let autocomplete: AutoCompleteInput = 'off';
	export let nameInput: string;
	export let labelText: string;
	export let valueInput: string;
	export let placeholder: string = '';
	export let className: string = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let rounded: RoundedSize = 'none';
	const dispatch = createEventDispatcher();

	const onInput: (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => void = (event) =>
		dispatch('input', event);
	function typeAction(node: any) {
		node.type = type;
	}
</script>

<label for={nameInput} class="label-fill">{labelText}</label>
<input
	class={`input-fill ${getRoundedStyle(ROUNDED_STYLE, rounded)?.class ?? 'rounded-none'} ${className}`}
	type="number"
	name={nameInput}
	id={nameInput}
	use:typeAction
	bind:value={valueInput}
	on:input|preventDefault={onInput}
	{maxlength}
	{placeholder}
	{autocomplete}
/>

<style lang="postcss">
	.label-fill {
		@apply block mb-2 text-sm font-medium text-gray-900;
	}
	.input-fill {
		@apply block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600;
	}
</style>
