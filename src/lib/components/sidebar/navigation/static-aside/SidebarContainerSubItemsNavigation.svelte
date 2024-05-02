<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
</script>

<ul
	class="content-list"
	transition:slide={{
		axis: 'y',
		duration: 300,
		easing: quadInOut
	}}
>
	<slot />
</ul>

<style lang="postcss">
	.content-list {
		/* color: var(--colorLogo); */
		@apply text-white;
	}
</style>
