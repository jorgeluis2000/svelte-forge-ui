<script lang="ts">
	import Toast from './Toast.svelte';
	import { dismissToast, toasts } from '$lib/stores/ToastStore';
</script>

{#if $toasts}
	<section>
		{#each $toasts as toast (toast.id)}
			<Toast
				type={toast.type ?? 'error'}
				dismissible={toast.dismissible}
				on:dismiss={() => dismissToast(toast.id ?? '')}>{@html toast.message ?? ''}</Toast
			>
		{/each}
	</section>
{/if}

<style lang="postcss">
	section {
		@apply flex justify-center fixed transition-all duration-300 top-0 right-0 md:right-2 w-full sm:w-[45%] lg:w-[35%] z-[1000] flex-col mt-20 gap-y-4 px-5 md:px-0;
	}
</style>
