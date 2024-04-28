<script lang="ts">
	import { cssVariables } from '$lib/functions/Styles.functions';
	import XMark from '$lib/icons/XMark.svelte';
	import type { ItemSelect } from '$lib/domains/types/Select.type';
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	export let selected: ItemSelect[];
	export let listShow: ItemSelect[];
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let color500 = useCss ? `var(--${theme}-500)` : listColors['500'];
	let color300 = useCss ? `var(--${theme}-300)` : listColors['300'];

	async function handlerSelected(item: ItemSelect) {
		const exist = selected.find((searching) => searching.value === item.value);
		if (exist) {
			selected = [...selected.filter((searching) => searching.value !== item.value)];
		} else {
			selected = [...selected, item];
		}
	}
</script>

<ul>
	{#each listShow as item}
		<button
			use:cssVariables={{
				color500,
				color300
			}}
			type="button"
			on:click={() => {
				handlerSelected(item);
			}}
			class="flex my-3"
		>
			<span
				class={`my-check-box ${
					selected.find((searching) => searching.value == item.value) ? 'activate' : ''
				}`}
			>
				{#if selected.find((searching) => searching.value == item.value)}
					<XMark className="w-10" />
				{:else}
					<XMark className="w-10 opacity-0" />
				{/if}
			</span>
			<span class="mx-1">{item.text}</span>
		</button>
	{/each}
</ul>

<style lang="postcss">
	.my-check-box {
		color: var(--color500);
		border-color: var(--color300);
		@apply flex justify-center items-center transition-all duration-300 border w-5 h-5;
	}
	.my-check-box.activate {
		border-color: var(--color500);
	}
</style>
