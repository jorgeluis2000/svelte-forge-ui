<script lang="ts">
	import { slide } from 'svelte/transition';
	import PersonalSelectGroupBox from '../../select/PersonalSelectGroupBox.svelte';
	import InputNatural from '../simples/InputNatural.svelte';
	import TagSimple from '../../tags/TagSimple.svelte';
	import TwoArrows from '../../../icons/TwoArrows.svelte';
	import type { ItemSelect } from '../../../domains/types/Select.type';
	import type { RoundedSize, TextSize } from '../../../domains/types/Sizes.type';
	import { getRoundedStyle, getTextSizeStyle } from '../../../functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '../../../constants/Styles.constants';

	export let listItemsShow: ItemSelect[];
	export let nameInput: string = '';
	export let labelText: string;
	export let valueInput: ItemSelect[] = [];
	export let className: string = '';
	export let defaultText: string;
	export let textManySelected: string;
	export let placeholderSearch: string = '';
	export let rounded: RoundedSize = 'none';
	export let roundedTags: RoundedSize = 'full';
	export let textSize: TextSize = 'base';
	export let textSizeTags: TextSize = 'base';

	const ownRounded: string = getRoundedStyle(ROUNDED_STYLE, rounded).class;
	const ownTextSize: string = getTextSizeStyle(TEXT_SIZE_STYLE, textSize).class;
	const ownTextSizeTags: string = getTextSizeStyle(TEXT_SIZE_STYLE, textSizeTags).class;
	let searchItems = '';
	let focusShow = false;
	let listSearch = listItemsShow;
	$: showSelected = (() => {
		let valueToShow = '';
		for (let index = 0; index < valueInput.length; index++) {
			const itemsSelected = valueInput[index];
			if (index >= valueInput.length) {
				valueToShow += itemsSelected.value;
			} else {
				valueToShow += itemsSelected + ',';
			}
		}
		return valueToShow;
	})();

	function eventSearchItemsInList() {
		if (searchItems === null) {
			searchItems = '';
		}
		listSearch = listItemsShow.filter(({ text }) =>
			text.toLowerCase().includes(searchItems.toLowerCase())
		);
	}
</script>

<div class={`content-input ${className}`}>
	<div class={`input-fill ${ownTextSize} ${ownRounded} peer`}>
		<button
			on:click|preventDefault={() => {
				focusShow = !focusShow;
			}}
			class={`flex justify-center items-center overflow-hidden w-full ${
				valueInput.length > 0 ? '' : 'text-gray-400'
			}`}
		>
			{#if valueInput.length > 0 && valueInput.length < 3}
				{#each valueInput as item}
					<TagSimple
						rounded={roundedTags}
						textSize={textSizeTags}
						valueText={listItemsShow.find((tagSearched) => tagSearched.value == item.value)?.text}
					/>
				{/each}
			{:else if valueInput.length >= 3}
				<span class={`font-medium text-primary-500 ${ownTextSizeTags}`}>
					{valueInput.length}
					{textManySelected}
				</span>
			{:else}
				{defaultText}
			{/if}
		</button>
		<button type="button" class="button-arrow" on:click={() => (focusShow = !focusShow)}>
			<TwoArrows className="size-4" />
		</button>
	</div>
	<input type="text" class="sr-only" name={nameInput} id={nameInput} value={showSelected} />
	<label for="name-company" class={`label-fill ${ownTextSize}`}>{labelText}</label>

	{#if focusShow}
		<section class={`container-select ${ownTextSize}`} transition:slide>
			<div class="realtive">
				<div class="container-search">
					<InputNatural
						type="search"
						nameInput={`${nameInput}-search`}
						bind:valueInput={searchItems}
						placeholder={placeholderSearch}
						{rounded}
						{textSize}
						on:input={eventSearchItemsInList}
					/>
				</div>
				<div class="content-list-items">
					<PersonalSelectGroupBox listShow={listSearch} bind:selected={valueInput} />
				</div>
			</div>
		</section>
	{/if}
</div>

<style lang="postcss">
	.content-input {
		@apply relative cursor-pointer;
	}
	.label-fill {
		@apply absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1;
	}
	.button-arrow {
		@apply transition-all duration-300 absolute right-4 top-3 rotate-90 bg-primary-500 text-white p-1 rounded-full hover:bg-primary-600 active:bg-primary-400;
	}
	.input-fill {
		@apply flex px-2.5 pb-2.5 pt-4 pr-10 w-full h-12 text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600;
	}
	.container-select {
		@apply absolute flex flex-col shadow-md w-full rounded-b-md max-h-[15rem] overflow-x-hidden overflow-y-auto bg-white z-10 scrollbar-thin scrollbar-thumb-primary-700 scrollbar-track-primary-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full;
	}
	.container-search {
		@apply sticky top-0 w-full bg-white px-2 py-3;
	}

	.content-list-items {
		@apply flex flex-col px-5 mb-4;
	}
</style>
