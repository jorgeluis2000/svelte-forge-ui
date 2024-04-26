<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import CloseCircleIcon from '../../icons/CloseCircleIcon.svelte';

	export let showModal: boolean;

	function closeDialog() {
		showModal = false;
	}
</script>

{#if showModal}
	<section class="container-modal" role="dialog">
		<div class="content-bg scroll-standard" transition:fade={{ easing: quintInOut, duration: 300 }}>
			<div class="center-modal">
				<article
					class="modal-dialog"
					transition:scale={{
						opacity: 0.5,
						start: 0,
						duration: 500,
						easing: quintInOut
					}}
				>
					<div class="content-modal">
						<button type="button" class="close-dialog" on:click={closeDialog}>
							<CloseCircleIcon />
						</button>
						<slot name="header" />
						<slot />
						<slot name="footer" />
					</div>
				</article>
			</div>
		</div>
	</section>
{/if}

<style lang="postcss">
	.scroll-standard {
		@apply scrollbar-thin scrollbar-thumb-primary-700 scrollbar-track-primary-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full;
	}

	.close-dialog {
		@apply transition-all duration-500 absolute w-7 top-3 right-2 cursor-pointer text-primary-500 hover:text-primary-600 active:text-primary-400;
	}

	.modal-dialog {
		@apply relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg;
	}

	.center-modal {
		@apply flex min-h-screen w-full items-center justify-center p-4 text-center sm:items-center sm:p-0;
	}

	.content-bg {
		@apply fixed inset-0 w-full overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity min-h-screen;
	}

	.content-modal {
		@apply bg-white w-full px-4 pb-4 pt-5 sm:w-auto sm:p-6 sm:pb-4;
	}

	.container-modal {
		@apply relative z-50;
	}
</style>
