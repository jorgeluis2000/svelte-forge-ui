<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { GroupItemSubMenuTabList } from '$lib/domains/types/SidebarNavigation.type';

	export let href: string;
	export let name: string;
	export let opened: boolean = false;
	export let items: GroupItemSubMenuTabList[];
	export let color: string = '';
	export let isList: boolean;
	let dispatch = createEventDispatcher();
	function validMatch(path: string) {
		try {
			return location.pathname.startsWith(path);
		} catch (error) {
			return false;
		}
	}
</script>

{#if isList}
	<button
		type="button"
		on:click|preventDefault={() => dispatch('click')}
		class="item-container bg-{color}-200"
	>
		<div class="icon">
			<slot name="icon" />
		</div>
		<span class={`item-text ${opened || validMatch(href) ? 'active' : ''}`}>{name}</span>
	</button>
{:else}
	<a {href} class="item-container bg-primary-200">
		<div class="icon">
			<slot name="icon" />
		</div>
		<span class={`item-text ${validMatch(href) ? 'active' : ''}`}>{name}</span>
	</a>
{/if}

<style lang="postcss">
	.item-container {
		@apply flex flex-col justify-center items-center space-y-2 p-2 rounded-2xl;
	}
	.item-text {
		@apply text-xs font-light text-gray-700 hidden;
	}
	.item-text.active {
		@apply block;
	}
	.icon {
		@apply size-6 md:size-8;
	}
</style>
