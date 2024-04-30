<script lang="ts">
	import { slide } from 'svelte/transition';
	import PersonalSelectBox from '$lib/components/select/PersonalSelectBox.svelte';
	import InputNatural from '$lib/components/inputs/simples/InputNatural.svelte';
	import TagSimple from '$lib/components/tags/TagSimple.svelte';
	import TwoArrows from '$lib/icons/TwoArrows.svelte';
	import type { ItemSelect } from '$lib/domains/types/Select.type';
	import type { RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import { cssVariables, getCustomStyle } from '$lib/functions/Styles.functions';
	import { ROUNDED_STYLE, TEXT_SIZE_STYLE } from '$lib/constants/Styles.constants';
	import {
		DEFAULT_COLOR_HEX,
		DEFAULT_ROUNDED_SIZE,
		DEFAULT_TEXT_SIZE,
		DEFAULT_THEME
	} from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';

	export let listItemsShow: ItemSelect[];
	export let nameInput: string = '';
	export let labelText: string;
	export let valueInput: ItemSelect | null = null;
	export let className: string = '';
	export let defaultText: string;

	export let placeholderSearch: string = '';
	export let rounded: RoundedSize = 'none';
	export let roundedTags: RoundedSize = 'full';
	export let textSize: TextSize = 'base';
	export let textSizeTags: TextSize = 'base';
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let colorText = useCss ? `var(--${theme}-600)` : listColors['600'];
	let colorBorder = useCss ? `var(--${theme}-600)` : listColors['600'];
	let colorBg = useCss ? `var(--${theme}-600)` : listColors['500'];
	let colorBgHover = useCss ? `var(--${theme}-600)` : listColors['500'];
	let colorBgActive = useCss ? `var(--${theme}-400)` : listColors['400'];
	let colorScrollThumb = useCss ? `var(--${theme}-700)` : listColors['700'];
	let colorScrollTrack = useCss ? `var(--${theme}-500)` : listColors['500'];
	const ownRounded: string = getCustomStyle(ROUNDED_STYLE, rounded, DEFAULT_ROUNDED_SIZE).class;
	const ownTextSize: string = getCustomStyle(TEXT_SIZE_STYLE, textSize, DEFAULT_TEXT_SIZE).class;

	let searchItems: string = '';
	let focusShow = false;
	let listSearch = listItemsShow;
	$: showSelected = (() => {
		const valueToShow = valueInput !== null ? valueInput.value : '';
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

<div
	use:cssVariables={{
		colorBorder,
		colorText,
		colorBg,
		colorBgHover,
		colorBgActive,
		colorScrollThumb,
		colorScrollTrack
	}}
	class={`content-input ${className}`}
>
	<section class={`input-fill  ${focusShow ? 'active' : ''} ${ownTextSize} ${ownRounded} peer`}>
		<button
			type="button"
			on:click={() => (focusShow = !focusShow)}
			class={`flex px-2.5 pb-2.5 pt-4 pr-10 mr-11 justify-center items-center overflow-hidden w-full ${
				valueInput !== null ? '' : 'text-gray-400'
			}`}
		>
			{#if valueInput !== null}
				<TagSimple
					{theme}
					{colorHex}
					{useCss}
					rounded={roundedTags}
					textSize={textSizeTags}
					valueText={listItemsShow.find((tagSearched) => tagSearched.value == valueInput?.value)
						?.text}
				/>
			{:else}
				{defaultText}
			{/if}
		</button>
		<button type="button" class="button-arrow" on:click={() => (focusShow = !focusShow)}>
			<TwoArrows className="w-4" />
		</button>
	</section>
	<input type="text" class="sr-only" name={nameInput} id={nameInput} value={showSelected} />
	<label for={nameInput} class={`label-fill ${focusShow ? 'active' : ''} ${ownTextSize}`}
		>{labelText}</label
	>

	{#if focusShow}
		<section class={`container-select scroll-style ${ownTextSize}`} transition:slide>
			<div class="w-full">
				<div class="container-search">
					<InputNatural
						type="search"
						nameInput={`${nameInput}-search`}
						bind:valueInput={searchItems}
						placeholder={placeholderSearch}
						{rounded}
						{textSize}
						{useCss}
						{colorHex}
						on:input={eventSearchItemsInList}
					/>
				</div>
				<div class="content-list-items">
					<PersonalSelectBox
						{useCss}
						{colorHex}
						{theme}
						listShow={listSearch}
						bind:selected={valueInput}
					/>
				</div>
			</div>
		</section>
	{/if}
</div>

<style lang="postcss">
	.content-input {
		@apply relative cursor-pointer;
	}
	.button-arrow {
		background-color: var(--colorBg);
		@apply transition-all duration-300 absolute right-4 top-3 rotate-90 text-white p-1 rounded-full;
	}

	.button-arrow:hover {
		background-color: var(--colorBgHover);
	}

	.button-arrow:active {
		background-color: var(--colorBgActive);
	}
	.label-fill {
		@apply absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1;
	}

	.label-fill.active {
		color: var(--colorText);
	}
	.input-fill {
		@apply flex w-full h-12 text-gray-900 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0;
	}

	.input-fill.active {
		border-color: var(--colorBorder);
	}
	.container-select {
		@apply absolute flex shadow-md w-full rounded-b-md max-h-[15rem] bg-white z-10;
	}

	.scroll-style {
		--scrollbar-thumb: var(--colorScrollThumb) !important;
		--scrollbar-track: var(--colorScrollTrack) !important;
		@apply scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-auto w-full;
	}
	.container-search {
		@apply sticky top-0 w-full bg-white px-2 py-3 z-10;
	}
	.content-list-items {
		@apply flex mb-4 w-full;
	}
</style>
