<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SuccessIcon from '$lib/icons/SuccessIcon.svelte';
	import ErrorIcon from '$lib/icons/ErrorIcon.svelte';
	import InfoIcon from '$lib/icons/InfoIcon.svelte';
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import WarningIcon from '$lib/icons/WarningIcon.svelte';
	import { cssVariables, getCustomStyle } from '$lib/functions/Styles.functions';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { COLOR_ALARM_STYLE, SIZE_STYLE } from '$lib/constants/Styles.constants';
	import { DEFAULT_ALARM, DEFAULT_SIZE } from '$lib/constants/DefaultStyles.constants';
	import type { TypeToast } from '$lib/domains/interfaces/Toast.interface';
	import type { GeneralSize } from '$lib/domains/types/Sizes.type';
	import TimeSandIcon from '$lib/icons/TimeSandIcon.svelte';

	const dispatch = createEventDispatcher();

	export let type: TypeToast = 'custom';
	export let dismissible: boolean = true;
	export let sizeIcon: GeneralSize = 'base';
	let styleSizeIcon = getCustomStyle(SIZE_STYLE, sizeIcon, DEFAULT_SIZE).class;
	let styleAlarm = getCustomStyle<TypeToast>(COLOR_ALARM_STYLE, type, DEFAULT_ALARM).class;
	let listColors = transformListToObject(generateColorScale(styleAlarm), styleAlarm);
	let colorIconText = listColors['600'];
	let colorIconBg = listColors['100'];
	$: {
		styleSizeIcon = getCustomStyle(SIZE_STYLE, sizeIcon, DEFAULT_SIZE).class;
		styleAlarm = getCustomStyle<TypeToast>(COLOR_ALARM_STYLE, type, DEFAULT_ALARM).class;
		listColors = transformListToObject(generateColorScale(styleAlarm), styleAlarm);
		colorIconText = listColors['600'];
		colorIconBg = listColors['100'];
	}
</script>

<button
	type="button"
	class="container-toast"
	on:click={() => dispatch('dismiss')}
	transition:fly={{ easing: quintOut, x: 250, duration: 800 }}
>
	<div
		use:cssVariables={{
			colorIconText,
			colorIconBg
		}}
		class="container-icon"
	>
		{#if type === 'success'}
			<SuccessIcon className={styleSizeIcon} />
		{:else if type === 'error'}
			<ErrorIcon className={styleSizeIcon} />
		{:else if type === 'loading'}
			<LoadingIcon className={styleSizeIcon} />
		{:else if type === 'warning'}
			<WarningIcon className={styleSizeIcon} />
		{:else if type === 'info'}
			<InfoIcon className={styleSizeIcon} />
		{:else if type === 'time'}
			<TimeSandIcon className={styleSizeIcon} />
		{:else}
			<slot name="icon" class={styleSizeIcon}></slot>
		{/if}
	</div>

	<div class="content-message">
		<slot />
	</div>

	{#if dismissible}
		<button type="button" class="button-close-toast" on:click={() => dispatch('dismiss')}>
			<CloseIcon className="size-5" />
		</button>
	{/if}
</button>

<style lang="postcss">
	.container-toast {
		@apply flex transition-all duration-300 w-full h-full p-5 bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg;
	}

	.button-close-toast {
		@apply inline-flex justify-center items-center ml-auto transition-all duration-300 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-200/50 hover:shadow-md active:shadow h-8 w-8;
	}

	.content-message {
		@apply ml-2 text-sm text-justify font-normal;
	}

	.container-icon {
		background-color: var(--colorIconBg);
		color: var(--colorIconText);
		@apply flex justify-center items-center size-8 rounded-md;
	}

	.text-xs {
		font-size: 0.75rem;
		line-height: 1rem;
	}

	.text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.text-base {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.text-lg {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	.text-xl {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}

	.text-2xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	.text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	.text-4xl {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}

	.text-5xl {
		font-size: 3rem;
		line-height: 1;
	}

	.text-6xl {
		font-size: 3.75rem;
		line-height: 1;
	}

	.text-7xl {
		font-size: 4.5rem;
		line-height: 1;
	}

	.text-8xl {
		font-size: 6rem;
		line-height: 1;
	}

	.text-9xl {
		font-size: 8rem;
		line-height: 1;
	}

	.rounded-none {
		border-radius: 0px;
	}

	.rounded-sm {
		border-radius: 0.125rem;
	}

	.rounded {
		border-radius: 0.25rem;
	}

	.rounded-md {
		border-radius: 0.375rem;
	}

	.rounded-lg {
		border-radius: 0.5rem;
	}

	.rounded-xl {
		border-radius: 0.75rem;
	}

	.rounded-2xl {
		border-radius: 1rem;
	}

	.rounded-3xl {
		border-radius: 1.5rem;
	}

	.rounded-full {
		border-radius: 9999px;
	}

	.size-2\.5 {
		width: 0.625rem;
		height: 0.625rem;
	}

	.size-5 {
		width: 1.25rem;
		height: 1.25rem;
	}

	.size-6 {
		width: 1.5rem;
		height: 1.5rem;
	}

	.size-8 {
		width: 2rem;
		height: 2rem;
	}

	.size-14 {
		width: 3.5rem;
		height: 3.5rem;
	}

	.size-16 {
		width: 4rem;
		height: 4rem;
	}
</style>
