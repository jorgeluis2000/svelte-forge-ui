<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SuccessIcon } from '$lib/icons';
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { cssVariables } from '$lib/functions/Styles.functions';
	import type { TypeItem } from '$lib/domains/types/TypeButton.type';

	export let type: TypeItem = 'link';
	export let theme: string = DEFAULT_THEME;
	export let name: string;
	export let href: string;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;

	const dispatch = createEventDispatcher();

	const listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	const color200 = useCss ? `var(--${theme}-200)` : listColors['200'];
</script>

{#if type === 'link'}
	<a
		{href}
		class="container"
		use:cssVariables={{
			color200
		}}
	>
		<div class="square-icon">
			<div class="size-icon">
				<slot name="icon"><SuccessIcon /></slot>
			</div>
		</div>
		<span class="text">{name}</span>
	</a>
{:else}
	<button
		type="button"
		on:click|preventDefault={() => dispatch('click')}
		class="container"
		use:cssVariables={{
			color200
		}}
	>
		<div class="square-icon">
			<div class="size-icon">
				<slot name="icon"><SuccessIcon /></slot>
			</div>
		</div>
		<span class="text">{name}</span>
	</button>
{/if}

<style lang="postcss">
	.container {
		@apply flex flex-col justify-center items-center space-y-2;
	}

	.square-icon {
		background-color: var(--color200);
		@apply rounded-2xl p-2;
	}

	.size-icon {
		@apply size-6 md:size-8;
	}
	.text {
		@apply text-xs text-center font-light text-gray-700;
	}
</style>
