<script lang="ts">
	import SeoGenerate from '$lib/components/seo/SEOGenerate.svelte';
	const companyInto = { name: 'Jorge Luis Güiza Granobles', address: [''], telephone: [''] };
</script>

<svelte:head>
	<SeoGenerate
		title="Examples Text Inputs"
		author="Jorge Luis Güiza Granobles"
		category="Lib for Svelte"
		company={companyInto}
		copyright="MIT"
		description="This page contains the example content of each component created."
		icon="favicon.png"
		image=""
		keywords="lib,help,svelte,components,ui"
		language="en"
	/>
</svelte:head>
<slot />
