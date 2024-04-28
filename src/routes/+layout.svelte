<script>
	import '../app.css';
</script>

<section class="inline-block w-full m-5 space-x-3 space-y-10">
	<a class="move-pages" href="/">Home</a>
	<span>/</span>
	<a class="move-pages" href="/modals">Modales</a>
	<span>/</span>
	<a class="move-pages" href="/inputs">Inputs</a>
	<span>/</span>
	<a class="move-pages" href="/textarea">TextAreas</a>
</section>
<section class="m-5 space-y-10">
	<slot />
</section>

<style lang="postcss">
	.move-pages {
		@apply duration-300 border-b border-2 border-transparent hover:border-b-primary-500;
	}
</style>
