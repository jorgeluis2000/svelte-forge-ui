<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let name: string;
	export let opened: boolean = false;
	export let href: string = '';
	export let color: string = '';
	export let isList: boolean = false;
	let dispatch = createEventDispatcher();

	function validMatch(path: string) {
		try {
			const originalPath = window.location.pathname;
			if (isList) {
				return originalPath.startsWith(path);
			} else {
				return path.startsWith(originalPath);
			}
		} catch (error) {
			return false;
		}
	}
</script>

{#if isList}
	<button
		type="button"
		on:click|preventDefault={() => {
			opened = true;
			dispatch('click');
		}}
		class="item-container bg-{color}-200"
	>
		<div class="icon">
			<slot name="icon" />
		</div>
		<span class={`item-text ${opened || validMatch(href) ? 'active' : 'inactive'}`}>{name}</span>
	</button>
{:else}
	<a {href} class="item-container">
		<div class="icon">
			<slot name="icon" />
		</div>
		<span class={`item-text ${opened || validMatch(href) ? 'active' : 'inactive'}`}>{name}</span>
	</a>
{/if}

<style lang="postcss">
	.item-container {
		background-color: var(--colorBg);
		@apply duration-300 flex flex-col justify-center items-center space-y-2 p-2 rounded-2xl;
	}
	.item-text {
		color: var(--colorText);
		@apply text-xs font-normal;
	}
	.item-text.active {
		@apply block;
	}
	.item-text.inactive {
		@apply hidden;
	}
	.icon {
		color: var(--colorText);
		@apply size-6 md:size-8;
	}
</style>
