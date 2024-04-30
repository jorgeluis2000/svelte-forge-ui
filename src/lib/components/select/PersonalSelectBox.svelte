<script lang="ts">
	import XMark from '$lib/icons/XMark.svelte';
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { cssVariables } from '$lib/functions/Styles.functions';
	import type { ItemSelect } from '$lib/domains/types/Select.type';
	export let selected: ItemSelect | null;
	export let listShow: ItemSelect[];
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let color500 = useCss ? `var(--${theme}-500)` : listColors['500'];
	let color300 = useCss ? `var(--${theme}-300)` : listColors['300'];
	let color100 = useCss ? `var(--${theme}-100)` : listColors['100'];

	async function handlerSelected(item: ItemSelect) {
		const sameSelected = selected?.value === item.value;
		if (sameSelected) {
			selected = null;
		} else {
			selected = item;
		}
	}
</script>

<ul class="container">
	{#each listShow as item}
		<button
			use:cssVariables={{
				color500,
				color300,
				color100
			}}
			type="button"
			on:click={() => {
				handlerSelected(item);
			}}
			class="box"
		>
			<span class={`my-check-box ${selected?.value === item.value ? 'activate' : ''}`}>
				{#if selected?.value === item.value}
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

	.container {
		@apply w-full;
	}
	.box {
		@apply duration-500 flex py-3 px-2 w-full;
	}

	.box:hover {
		background-color: var(--color100);
	}

	.container:hover > :not(:hover) {
		@apply opacity-45;
	}
</style>
