<script lang="ts">
	import type { AutoCompleteInput } from '../../domains/types/AutoComplete.type';

	export let maxlength: number | null | undefined = null;
	export let autocomplete: AutoCompleteInput = 'off';
	export let inputValue: string;
	export let labelText: string;
	export let nameInput: string;
	export let placeholder: string = '';
	export let className: string = '';
	export let onInput: (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => void = (
		event
	) => {
		event.preventDefault();
	};
</script>

<label for={nameInput} class="label-fill">{labelText}</label>
<input
	class={`input-fill ${className}`}
	type="number"
	name={nameInput}
	id={nameInput}
	bind:value={inputValue}
	on:input={onInput}
	{maxlength}
	{placeholder}
	{autocomplete}
/>

<style lang="postcss">
	.label-fill {
		@apply block mb-2 text-sm font-medium text-gray-900;
	}
	.input-fill {
		@apply block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600;
	}
</style>
