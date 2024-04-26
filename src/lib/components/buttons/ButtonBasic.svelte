<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ThemeColor } from '../../domains/types/ThemeColor.type';
	import type { ButtonSize } from '../../domains/types/Sizes.type';

	export let theme: ThemeColor = 'light';
	export let isFilled: boolean = false;
	export let className: string = '';
	export let size: ButtonSize = 'md';
	export let sizeIcon: ButtonSize = 'sm';
	export let thereIsIcon: boolean = false;
	let isLight = theme === 'light' ? `var(--success)` : `var(--light)`;
	let isDanger = theme === 'error' ? `var(--danger)` : `var(--success)`;
	let isFilledNow = isFilled ? isLight : isDanger;

	const dispatch = createEventDispatcher();
</script>

<button
	type="button"
	class={`btn  ${isFilled ? 'filled' : ''} ${className}`}
	data-size={size}
	on:click={(event) => dispatch('click', event)}
>
	<div
		class={`${thereIsIcon ? 'btn-icon' : 'hidden'} ${
			sizeIcon === 'sm' ? 'size-5' : sizeIcon === 'md' ? 'size-8' : 'size-14'
		}`}
	>
		<slot name="icon" />
	</div>
	<slot />
</button>

<style lang="postcss">
	.btn {
		@apply px-4 py-2 border-2 rounded-md text-sm justify-center items-center space-x-1.5 bg-white shadow-sm hover:shadow-lg hover:scale-105 active:scale-95;
	}

	.btn-icon {
		@apply block md:hidden lg:block;
	}

	.btn.filled {
		background-color: var(--color);
	}
</style>
