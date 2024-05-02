<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import { SuccessIcon } from '$lib/icons';
	import ArrowUpColor from '$lib/icons/ArrowUpColor.svelte';
	import ArrowDownColor from '$lib/icons/ArrowDownColor.svelte';

	export let openSidebar: boolean = false;
	export let openList: boolean = false;
	export let isList: boolean = false;
	export let href: string = '';
	export let nameItem: string;

	let dispatcher = createEventDispatcher();

	function validMatch(into: string) {
		return location.pathname.startsWith(into);
	}
	function eventTurnList() {
		openList = !openList;
		openSidebar = true;
		dispatcher('click');
	}
</script>

{#if isList}
	<li class="item">
		<button
			type="button"
			class={`link ${validMatch(href) ? 'active' : ''}`}
			on:click|preventDefault={eventTurnList}
		>
			<div class="icon">
				<slot name="icon"><SuccessIcon /></slot>
			</div>
			<span class="text">{@html nameItem}</span>
			<div class={`btn-arrow ${openSidebar ? 'activate' : 'inactive'}`}>
				{#if openList}
					<ArrowUpColor />
				{:else}
					<ArrowDownColor />
				{/if}
				{#if openList && openSidebar}
					<section
						class="content-list"
						transition:slide={{
							axis: 'y',
							duration: 300,
							easing: quadInOut
						}}
					>
						<slot name="items" />
					</section>
				{/if}
			</div>
		</button>
	</li>
{:else}
	<li class="item">
		<button
			type="button"
			class={`link ${validMatch(href) ? 'active' : ''}`}
			on:click={eventTurnList}
		>
			<div class="icon">
				<slot name="icon"><SuccessIcon /></slot>
			</div>
			<span class="text">{@html nameItem}</span>
		</button>
	</li>
{/if}

<style lang="postcss">
	.item {
		@apply w-full;
	}
	.item .link {
		filter: grayscale(100%) opacity(0.8);
		color: var(--colorLogo);
		@apply duration-300 flex items-center w-full text-white rounded-l-full;
	}
	.item .link:hover {
		filter: grayscale(0%) opacity(1);
		@apply bg-gray-100 text-black;
	}
	.item .link.active {
		filter: grayscale(0%) opacity(1) !important;
	}
	.item .link .icon {
		color: var(--colorBgLogo);
		@apply min-w-[2rem] size-8 mx-[1.95rem] my-4 mr-2;
	}
	.item .link .text {
		@apply mx-4 ml-2 text-sm font-medium overflow-hidden;
	}

	.content-list {
		@apply my-2 mt-2 text-white;
	}

	.btn-arrow {
		background-color: var(--color300);
		@apply absolute size-6 right-4 rounded-full;
	}

	.btn-arrow.active {
		@apply block opacity-100;
	}

	.btn-arrow.inactive {
		@apply hidden opacity-0;
	}
</style>
