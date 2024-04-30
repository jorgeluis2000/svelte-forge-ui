<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SuccessIcon from '$lib/icons/SuccessIcon.svelte';
	import ErrorIcon from '$lib/icons/ErrorIcon.svelte';
	import InfoIcon from '$lib/icons/InfoIcon.svelte';
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import type { TypeToast } from '$lib/domains/interfaces/Toast.interface';
	import WarningIcon from '$lib/icons/WarningIcon.svelte';

	const dispatch = createEventDispatcher();

	export let type: TypeToast = 'custom';
	export let dismissible: boolean = true;
</script>

<button
	type="button"
	class="container-toast"
	on:click={() => dispatch('dismiss')}
	transition:fly={{ easing: quintOut, x: 250, duration: 800 }}
>
	{#if type === 'success'}
		<SuccessIcon className="size-5" />
	{:else if type === 'error'}
		<ErrorIcon className="size-5" />
	{:else if type === 'loading'}
		<LoadingIcon className="size-5" />
	{:else if type === 'warning'}
		<WarningIcon className="size-5" />
	{:else if type === 'info'}
		<InfoIcon className="size-5" />
	{:else}
		<slot name="icon"></slot>
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
		@apply flex transition-all duration-300 w-full h-full p-5 bg-gray-50 shadow-md rounded-md cursor-pointer hover:shadow-lg;
	}

	.button-close-toast {
		@apply inline-flex justify-center items-center ml-auto transition-all duration-300 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-200/50 hover:shadow-md active:shadow h-8 w-8;
	}

	.content-message {
		@apply ml-2 text-sm text-justify font-normal;
	}
</style>
