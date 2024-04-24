<script lang="ts">
	import type { AutoCompleteInput } from '../../domains/types/AutoComplete.type';

	export let maxlength: number | null | undefined = null;
	export let autocomplete: AutoCompleteInput = 'off';
	export let nameInput: string;
	export let labelText: string;
	export let valueInput: string;
	export let className: string = '';
	export let onInput: (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => void = (
		event
	) => {
		event.preventDefault();
	};
</script>

<div class={`content-input ${className}`}>
	<label for={nameInput} class="label-fill">{labelText}</label>
	<input
		bind:value={valueInput}
		on:input={onInput}
		type="search"
		{autocomplete}
		{maxlength}
		id={nameInput}
		name={nameInput}
		placeholder=" "
		class="input-fill peer"
	/>
</div>

<style lang="postcss">
	.content-input {
		@apply relative;
	}
	.label-fill {
		@apply absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 cursor-text origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1;
	}
	.input-fill {
		@apply block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600;
	}
</style>
