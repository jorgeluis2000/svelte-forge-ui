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

	const dispatch = createEventDispatcher();

	export let type: TypeToast = 'custom';
	export let dismissible: boolean = true;
	export let sizeIcon: GeneralSize = 'base';
	const styleSizeIcon = getCustomStyle(SIZE_STYLE, sizeIcon, DEFAULT_SIZE).class;

	let styleAlarm = getCustomStyle(COLOR_ALARM_STYLE, type, DEFAULT_ALARM).class;
	let listColors = transformListToObject(generateColorScale(styleAlarm), styleAlarm);
	let colorIconText = listColors['500'];
	let colorIconBg = listColors['100'];
</script>

<button
	type="button"
	class="container-toast"
	on:click={() => dispatch('dismiss')}
	transition:fly={{ easing: quintOut, x: 250, duration: 800 }}
>
	{#if type === 'success'}
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class="container-icon"
		>
			<SuccessIcon className={styleSizeIcon} />
		</div>
	{:else if type === 'error'}
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class="container-icon"
		>
			<ErrorIcon className={styleSizeIcon} />
		</div>
	{:else if type === 'loading'}
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class="container-icon"
		>
			<LoadingIcon className={styleSizeIcon} />
		</div>
	{:else if type === 'warning'}
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class="container-icon"
		>
			<WarningIcon className={styleSizeIcon} />
		</div>
	{:else if type === 'info'}
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class="container-icon"
		>
			<InfoIcon className={styleSizeIcon} />
		</div>
	{:else}
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class="container-icon"
		>
			<slot name="icon"></slot>
		</div>
	{/if}

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
		font-size: 0.75rem /* 12px */;
		line-height: 1rem /* 16px */;
	}

	.text-sm {
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
	}

	.text-base {
		font-size: 1rem /* 16px */;
		line-height: 1.5rem /* 24px */;
	}

	.text-lg {
		font-size: 1.125rem /* 18px */;
		line-height: 1.75rem /* 28px */;
	}

	.text-xl {
		font-size: 1.25rem /* 20px */;
		line-height: 1.75rem /* 28px */;
	}

	.text-2xl {
		font-size: 1.5rem /* 24px */;
		line-height: 2rem /* 32px */;
	}

	.text-3xl {
		font-size: 1.875rem /* 30px */;
		line-height: 2.25rem /* 36px */;
	}

	.text-4xl {
		font-size: 2.25rem /* 36px */;
		line-height: 2.5rem /* 40px */;
	}

	.text-5xl {
		font-size: 3rem /* 48px */;
		line-height: 1;
	}

	.text-6xl {
		font-size: 3.75rem /* 60px */;
		line-height: 1;
	}

	.text-7xl {
		font-size: 4.5rem /* 72px */;
		line-height: 1;
	}

	.text-8xl {
		font-size: 6rem /* 96px */;
		line-height: 1;
	}

	.text-9xl {
		font-size: 8rem /* 128px */;
		line-height: 1;
	}

	/* Rounded */

	.rounded-none {
		border-radius: 0px;
	}

	.rounded-sm {
		border-radius: 0.125rem /* 2px */;
	}

	.rounded {
		border-radius: 0.25rem /* 4px */;
	}

	.rounded-md {
		border-radius: 0.375rem /* 6px */;
	}

	.rounded-lg {
		border-radius: 0.5rem /* 8px */;
	}

	.rounded-xl {
		border-radius: 0.75rem /* 12px */;
	}

	.rounded-2xl {
		border-radius: 1rem /* 16px */;
	}

	.rounded-3xl {
		border-radius: 1.5rem /* 24px */;
	}

	.rounded-full {
		border-radius: 9999px;
	}

	/* Size w and h */

	.size-2\.5 {
		width: 0.625rem /* 10px */;
		height: 0.625rem /* 10px */;
	}

	.size-5 {
		width: 1.25rem /* 20px */;
		height: 1.25rem /* 20px */;
	}

	.size-6 {
		width: 1.5rem /* 24px */;
		height: 1.5rem /* 24px */;
	}

	.size-8 {
		width: 2rem /* 32px */;
		height: 2rem /* 32px */;
	}

	.size-14 {
		width: 3.5rem /* 56px */;
		height: 3.5rem /* 56px */;
	}

	.size-16 {
		width: 4rem /* 64px */;
		height: 4rem /* 64px */;
	}
</style>
