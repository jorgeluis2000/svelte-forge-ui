<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let href: string = '';

	let dispatcher = createEventDispatcher();

	function validMatch(into: string) {
		return into.startsWith(location.pathname);
	}

	function eventClick() {
		dispatcher('click');
	}
</script>

<li class="item-list">
	<button
		type="button"
		on:click|preventDefault={eventClick}
		class={`link-list ${validMatch(href) ? 'selected' : ''}`}
	>
		<span class="link-test"><slot></slot></span>
	</button>
</li>

<style lang="postcss">
	.item-list {
		@apply w-full text-sm flex;
	}
	.link-list {
		filter: grayscale(100%) opacity(0.8);
		@apply transition-all duration-300 w-full ml-8 px-3 py-2 my-1;
	}
	.link-list:hover {
		filter: grayscale(0%) opacity(1);
		background-color: var(--colorBgLogo);
		color: var(--colorLogo);
		@apply rounded-l-full;
	}
	.link-list.selected {
		filter: grayscale(0%) opacity(1);
		background-color: var(--colorBgLogo);
		color: var(--colorLogo);
		@apply rounded-l-full;
	}
</style>
