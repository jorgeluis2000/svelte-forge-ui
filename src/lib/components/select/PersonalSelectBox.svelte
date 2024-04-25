<script lang="ts">
	import XMark from './../../icons/XMark.svelte';
	import type { ItemSelect } from './../../domains/types/Select.type';
	export let selected: ItemSelect | null;
	export let listShow: ItemSelect[];
	async function handlerSelected(item: ItemSelect) {
		const sameSelected = selected?.value === item.value;
		if (sameSelected) {
			selected = null;
		} else {
			selected = item;
		}
	}
</script>

<ul>
	{#each listShow as item}
		<button
			type="button"
			on:click={() => {
				handlerSelected(item);
			}}
			class="flex my-3"
		>
			<span class={`my-check-box ${selected?.value === item.value ? 'activate' : ''}`}>
				{#if selected?.value === item.value}
					<XMark className="w-10" />
				{:else}
					<XMark className="w-10 opacity-0" />
				{/if}
			</span>
			<span class="mx-1">{item.text}</span>
		</button>
	{/each}
</ul>

<style lang="postcss">
	.my-check-box {
		@apply flex justify-center items-center transition-all duration-300 text-primary-500 border border-primary-300 w-5 h-5;
	}
	.my-check-box.activate {
		@apply border-primary-500;
	}
</style>
