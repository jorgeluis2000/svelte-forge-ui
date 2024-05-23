<script lang="ts">
	import Toast from './Toast.svelte';
	import { dismissToast, toasts } from '$lib/stores/ToastStore';
	import type { GeneralSize } from '$lib/domains/types/Sizes.type';
	import type { IToast } from '$lib/domains/interfaces/Toast.interface';

	export let sizeIcon: GeneralSize = 'base';
	let toastsContainer: IToast[];
</script>

{#if $toasts}
	<section class="position-container-right-top">
		{#each $toasts as toast (toast.id)}
			<Toast
				type={toast.type ?? 'error'}
				dismissible={toast.dismissible}
				{sizeIcon}
				on:dismiss={() => dismissToast(toast.id ?? '')}
			>
				<svelte:component this={toast.component} slot="icon"></svelte:component>
				{@html toast.message}
			</Toast>
		{/each}
	</section>
{/if}

<style lang="postcss">
	.position-container-right-top {
		@apply flex justify-center items-center fixed transition-all duration-300 top-0 right-1 md:right-2 w-full sm:w-[45%] lg:w-[35%] z-[1000] flex-col mt-20 gap-y-4 px-4 sm:px-0;
	}
</style>
