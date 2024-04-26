<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cssVariables } from '../../functions/Styles.functions';
	import type { ThemeColor } from '../../domains/types/ThemeColor.type';
	import type { ButtonSize } from '../../domains/types/Sizes.type';

	export let theme: ThemeColor = 'light';
	export let isFilled: boolean = false;
	export let className: string = '';
	export let size: ButtonSize = 'md';
	export let sizeIcon: ButtonSize = 'sm';
	export let thereIsIcon: boolean = false;
	let isLight = theme === 'light' ? `var(--success)` : `var(--light)`;
	let isDanger = theme === 'danger' ? `var(--danger)` : `var(--success)`;
	let isFilledNow = isFilled ? isLight : isDanger;

	const dispatch = createEventDispatcher();
</script>

<button
	type="button"
	use:cssVariables={{
		color: `var(--${theme})`,
		textColor: isFilledNow
	}}
	class={`btn ${isFilled ? 'filled' : ''} ${className}`}
	data-size={size}
	on:click={(event) => dispatch('click', event)}
>
	<div
		class={`${thereIsIcon ? 'btn-icon' : 'hidden'} ${
			sizeIcon === 'sm' ? 'w-5 h-5' : sizeIcon === 'md' ? 'w-8 h-8' : 'w-14 h-14'
		}`}
	>
		<slot name="icon" />
	</div>
	<slot />
</button>

<style lang="postcss">
	.btn {
		display: flex;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		color: var(--textColor);
		border-color: var(--color);
		@apply px-4 py-2 border-2 rounded-md text-sm justify-center items-center space-x-1.5 bg-white shadow-sm hover:shadow-lg hover:scale-105 active:scale-95;
	}

	.btn-icon {
		@apply block md:hidden lg:block;
	}

	.btn.filled {
		background-color: var(--color);
	}
</style>
