<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import CloseCircleIcon from '$lib/icons/CloseCircleIcon.svelte';
	import { DEFAULT_COLOR_HEX, DEFAULT_THEME } from '$lib/constants/DefaultStyles.constants';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';
	import { cssVariables } from '$lib/functions/Styles.functions';

	export let showModal: boolean;
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let useCss: boolean = false;
	export let fullScreen: boolean = false;
	export let className: string = '';

	const opacityTransition = 0.5;
	const startTransition = 0;
	const durationTransition = 500;

	let listColors = transformListToObject(generateColorScale(colorHex), colorHex);
	let scrollbarThumb = useCss ? `var(--${theme}-700)` : listColors['700'];
	let scrollbarTrack = useCss ? `var(--${theme}-500)` : listColors['500'];
	let colorBg = useCss ? `var(--${theme}-500)` : listColors['500'];
	let colorText = useCss ? `var(--${theme}-500)` : listColors['500'];
	let colorTextHover = useCss ? `var(--${theme}-600)` : listColors['600'];
	let colorTextActive = useCss ? `var(--${theme}-400)` : listColors['400'];

	function closeDialog() {
		showModal = false;
	}
</script>

{#if showModal}
	<section
		use:cssVariables={{
			colorBg,
			scrollbarThumb,
			scrollbarTrack,
			colorText,
			colorTextHover,
			colorTextActive
		}}
		class="container-modal"
		role="dialog"
	>
		<div class="content-bg scroll-standard" transition:fade={{ easing: quintInOut, duration: 300 }}>
			<div class="center-modal">
				<article
					class={`modal-dialog ${fullScreen ? 'full-screen' : 'default'} ${className}`}
					transition:scale={{
						opacity: opacityTransition,
						start: startTransition,
						duration: durationTransition,
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
		--scrollbar-thumb: var(--scrollbarThumb) !important;
		--scrollbar-track: var(--scrollbarTrack) !important;
		@apply scrollbar-none scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full;
	}

	.close-dialog {
		color: var(--colorText);
		@apply transition-all duration-500 absolute w-7 top-3 right-2 cursor-pointer;
	}

	.close-dialog:hover {
		color: var(--colorTextHover);
	}

	.close-dialog:active {
		color: var(--colorTextActive);
	}

	.modal-dialog {
		@apply w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all;
	}

	.modal-dialog.default {
		@apply sm:my-8 w-full sm:max-w-lg;
	}

	.modal-dialog.full-screen {
		@apply w-full h-screen;
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
