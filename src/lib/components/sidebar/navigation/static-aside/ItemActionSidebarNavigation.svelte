<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { cssVariables, generateColorScale, transformListToObject } from '$lib/functions';
	import { SuccessIcon } from '$lib/icons';

	export let openSidebar: boolean = false;
	export let href: string = '';
	export let nameItem: string;
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;
	export let isFilled: boolean = false;

	const listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	const color500 = useCss ? `var(--${theme}-500)` : listColors['500'];
	const colorBgLogo = isFilled ? 'white' : color500;
	const colorLogo = isFilled ? color500 : 'white';
	let dispatcher = createEventDispatcher();

	function validMatch(path: string) {
		try {
			const originalPath = window.location.pathname;

			return path.startsWith(originalPath);
		} catch (error) {
			return false;
		}
	}
</script>

<li
	use:cssVariables={{
		colorBgLogo,
		colorLogo
	}}
	class="item"
	title={nameItem}
>
	<button
		type="button"
		on:click={() => dispatcher('click')}
		class={`link ${validMatch(href) ? 'active' : ''}`}
	>
		<div class="icon">
			<slot name="icon"><SuccessIcon /></slot>
		</div>
		<span class={`transition-opacity duration-200 text ${openSidebar ? '' : 'opacity-0'}`}
			>{@html nameItem}</span
		>
	</button>
</li>

<style lang="postcss">
	.item {
		@apply w-full list-none;
	}
	.item .link,
	.item .link .icon {
		color: var(--colorBgLogo);
		@apply duration-300 flex items-center w-full rounded-l-full grayscale;
	}
	.item .link:hover,
	.item .link.opened {
		color: var(--colorLogo);
		background-color: var(--colorBgLogo);
		@apply filter-none;
	}

	.item .link:hover > .icon,
	.item .link.opened > .icon {
		color: var(--colorLogo);
		@apply filter-none;
	}

	.item .link.active {
		color: var(--colorLogo);
		background-color: var(--colorBgLogo);
		@apply filter-none;
	}

	.item .link.active .icon {
		color: var(--colorBgLogo);
		@apply filter-none;
	}
	.item .link .icon {
		color: var(--colorBgLogo);
		@apply min-w-[2rem] size-8 mx-[1.95rem] my-4 mr-2;
	}
	.item .link .text {
		@apply mx-4 ml-2 text-sm font-medium overflow-hidden;
	}
</style>
