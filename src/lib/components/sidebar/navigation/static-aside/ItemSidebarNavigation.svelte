<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SuccessIcon, ArrowDownColor } from '$lib/icons';

	export let openSidebar: boolean = false;
	export let openList: boolean = false;
	export let isList: boolean = false;
	export let href: string = '';
	export let nameItem: string;

	let dispatcher = createEventDispatcher();

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

	function eventTurnList() {
		openList = !openList;
		openSidebar = true;
		dispatcher('click');
	}
</script>

{#if isList}
	<li class="item" title={nameItem}>
		<button
			type="button"
			class={`link ${openList ? 'opened' : ''} ${validMatch(href) ? 'active' : ''}`}
			on:click|preventDefault={eventTurnList}
		>
			<div class="icon">
				<slot name="icon"><SuccessIcon /></slot>
			</div>
			<span class={`transition-opacity duration-200 text ${openSidebar ? '' : 'opacity-0'}`}
				>{@html nameItem}</span
			>
			<div class={`btn-arrow ${openSidebar ? 'activate' : 'inactive'}`}>
				<ArrowDownColor className={`duration-300 ${openList ? '-rotate-180' : ''}`} />
			</div>
		</button>
	</li>
	{#if openList && openSidebar}
		<section class="content-sub-list">
			<slot name="sub-items" />
		</section>
	{/if}
{:else}
	<li class="item" title={nameItem}>
		<a {href} class={`link ${validMatch(href) ? 'active' : ''}`}>
			<div class="icon">
				<slot name="icon"><SuccessIcon /></slot>
			</div>
			<span class={`transition-opacity duration-200 text ${openSidebar ? '' : 'opacity-0'}`}
				>{@html nameItem}</span
			>
		</a>
	</li>
{/if}

<style lang="postcss">
	.item {
		@apply w-full;
	}
	.item .link,
	.item .link .icon {
		color: var(--colorBgLogo);
		@apply duration-300 flex items-center w-full rounded-l-full grayscale;
	}
	.item .link:hover,
	.item .link.opened {
		color: var(--colorLogo);
		background-color: var(--colorBgLogo);
		@apply filter-none;
	}

	.item .link:hover > .icon,
	.item .link.opened > .icon {
		color: var(--colorLogo);
		@apply filter-none;
	}

	.item .link:hover > .btn-arrow {
		@apply filter-none;
	}

	.item .link.active {
		color: var(--colorLogo);
		background-color: var(--colorBgLogo);
		@apply filter-none;
	}

	.item .link.active .icon {
		color: var(--colorBgLogo);
		@apply filter-none;
	}
	.item .link .icon {
		color: var(--colorBgLogo);
		@apply min-w-[2rem] size-8 mx-[1.95rem] my-4 mr-2;
	}
	.item .link .text {
		@apply mx-4 ml-2 text-sm font-medium overflow-hidden;
	}

	.btn-arrow {
		background-color: var(--color300);
		@apply absolute size-6 right-4 rounded-full grayscale;
	}

	.btn-arrow.active {
		@apply block opacity-100;
	}

	.btn-arrow.inactive {
		@apply hidden opacity-0;
	}

	.content-sub-list {
		@apply block w-full;
	}
</style>
