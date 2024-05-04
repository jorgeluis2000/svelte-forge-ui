<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { CloseCircleIcon } from '$lib/icons';

	export let opened: boolean = false;
	export let fullH: boolean = false;

	function eventCloseContainer() {
		opened = false;
	}
</script>

{#if opened}
	<section
		class={`container ${fullH ? 'full' : ''}`}
		transition:slide={{ axis: 'y', duration: 500, easing: quintOut }}
	>
		<button type="button" on:click|preventDefault={eventCloseContainer} class="close">
			<CloseCircleIcon />
		</button>
		<slot></slot>
	</section>
{/if}

<style lang="postcss">
	.container {
		@apply flex flex-col absolute bottom-0 w-full h-[80vh] bg-white space-y-5 py-2 px-3 overflow-y-auto overflow-x-hidden;
	}
	.container.full {
		@apply h-[100vh];
	}
	.close {
		color: var(--color500);
		&:hover {
			color: var(--color600);
		}
		&:active {
			color: var(--color400);
		}
		@apply fixed right-3 mt-2 w-7;
	}
</style>
