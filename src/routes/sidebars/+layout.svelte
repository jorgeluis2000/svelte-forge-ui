<script lang="ts">
	import { ButtonAction } from '$lib/components/buttons';
	import SeoGenerate from '$lib/components/seo/SEOGenerate.svelte';
	import { SidebarNavigation } from '$lib/components/sidebar';
	import DataUserGeneral from '$lib/components/sidebar/navigation/DataUserGeneral.svelte';
	const companyInto = { name: 'Jorge Luis Güiza Granobles', address: [''], telephone: [''] };
	let actionSidebar = false;
</script>

<SidebarNavigation bind:openSidebar={actionSidebar} responsive>
	<DataUserGeneral
		nameCompany="Panadería"
		nameUser="Jorge Luis G."
		userRole="Administrador"
		slot="info"
	></DataUserGeneral>
</SidebarNavigation>

<svelte:head>
	<SeoGenerate
		title="Examples Text Sidebars"
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

<div class="flex w-full" id="textareas">
	<h2 class="text-xl font-semibold">Sidebars Section</h2>
</div>

<section class="flex w-full">
	<ButtonAction
		on:click={() => (actionSidebar = !actionSidebar)}
		type="button"
		rounded="md"
		textSize="sm"
	>
		<span>Open Sidebar</span>
	</ButtonAction>
</section>
