<script lang="ts">
	export let className: string = '';
</script>

<section class={`container ${className}`}>
	<h3 class="title">
		<slot></slot>
	</h3>
</section>

<style lang="postcss">
	.container {
		@apply flex justify-between items-center pb-4 mb-4 rounded-t border-b border-slate-300 sm:mb-5;
	}
	.title {
		@apply text-lg font-semibold text-gray-900;
	}
</style>
