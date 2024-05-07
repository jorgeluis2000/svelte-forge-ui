<script lang="ts">
	export let title: string;
</script>

<article class="container">
	<h2 class="title">{title}</h2>
	<div class="content-list">
		<slot></slot>
	</div>
</article>

<style lang="postcss">
	.container {
		@apply flex flex-col justify-start items-start space-y-4 py-2;
	}
	.title {
		color: var(--color500);
		@apply text-xl font-medium;
	}

	.content-list {
		@apply grid grid-cols-4 gap-x-2 gap-y-3;
	}
</style>
