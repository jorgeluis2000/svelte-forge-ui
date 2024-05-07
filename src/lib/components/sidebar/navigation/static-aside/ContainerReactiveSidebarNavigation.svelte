<script lang="ts">
	export let className = '';
</script>

<section class={`container ${className}`}>
	<slot></slot>
</section>

<style lang="postcss">
	.container {
		@apply lg:ml-24;
	}
</style>
