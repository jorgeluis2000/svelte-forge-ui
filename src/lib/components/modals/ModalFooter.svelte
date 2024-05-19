<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ButtonAction from '$lib/components/buttons/ButtonAction.svelte';
	import {
		DEFAULT_COLOR_ERROR,
		DEFAULT_COLOR_SUCCESS
	} from '$lib/constants/DefaultStyles.constants';
	import type { RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
	import '$lib/css/sizes.css';

	export let showModal: boolean;
	export let rounded: RoundedSize = 'none';
	export let textSize: TextSize = 'base';
	export let textCancel: string = '';
	export let textAction: string = '';
	export let className: string = '';

	const dispatch = createEventDispatcher();
</script>

<section class={`container ${className}`}>
	<ButtonAction
		colorHex={DEFAULT_COLOR_ERROR}
		{textSize}
		{rounded}
		on:click={() => {
			showModal = false;
			dispatch('cancel');
		}}
	>
		{@html textCancel}
	</ButtonAction>
	<ButtonAction
		isFilled
		colorHex={DEFAULT_COLOR_SUCCESS}
		{textSize}
		{rounded}
		on:click={() => dispatch('click')}
	>
		{@html textAction}
	</ButtonAction>
</section>

<style lang="postcss">
	.container {
		@apply flex flex-col justify-center gap-3 items-center sm:flex-row;
	}
</style>
