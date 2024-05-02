<script lang="ts">
	import CopyRightSidebarNavigation from '$lib/components/sidebar/navigation/static-aside/CopyRightSidebarNavigation.svelte';
	import SubItemsSidebarNavigation from '$lib/components/sidebar/navigation/static-aside/SubItemsSidebarNavigation.svelte';
	import type { ItemList, ItemTabList } from '$lib';
	import { ButtonAction } from '$lib/components/buttons';
	import SeoGenerate from '$lib/components/seo/SEOGenerate.svelte';
	import { SidebarNavigation } from '$lib/components/sidebar';
	import DataUserGeneral from '$lib/components/sidebar/navigation/static-aside/DataUserGeneral.svelte';
	import ItemSidebarNavigation from '$lib/components/sidebar/navigation/static-aside/ItemSidebarNavigation.svelte';
	import SidebarContainerBodyNavigation from '$lib/components/sidebar/navigation/static-aside/SidebarContainerBodyNavigation.svelte';
	import { RobotColorIcon, ConfigurationColorIcon, SuccessIcon } from '$lib/icons';
	import SidebarContainerSubItemsNavigation from '$lib/components/sidebar/navigation/static-aside/SidebarContainerSubItemsNavigation.svelte';
	import SidebarContainerFooterNavigation from '$lib/components/sidebar/navigation/static-aside/SidebarContainerFooterNavigation.svelte';
	import TabBottomNavigation from '$lib/components/sidebar/navigation/static-bottom/TabBottomNavigation.svelte';
	import ItemTabBottomNavigation from '$lib/components/sidebar/navigation/static-bottom/ItemTabBottomNavigation.svelte';

	const companyInto = { name: 'Jorge Luis Güiza Granobles', address: [''], telephone: [''] };
	let actionSidebar = false;

	let testItemsList: ItemList[] = [
		{
			opened: false,
			isList: true,
			icon: ConfigurationColorIcon,
			nameItem: 'Hello World 2',
			href: '/sidebars',
			subItems: [{ text: 'Sub Hello world', href: '/hello' }]
		},
		{
			opened: false,
			isList: false,
			icon: RobotColorIcon,
			nameItem: 'Hello World',
			href: '/sidebars',
			subItems: []
		}
	];
	let testTabsList: ItemTabList[] = [
		{
			color: 'red',
			href: '/',
			isList: false,
			icon: SuccessIcon,
			opened: false,
			items: [],
			nameItem: ''
		}
	];
</script>

<SidebarNavigation bind:openSidebar={actionSidebar} responsive isFilled>
	<DataUserGeneral
		slot="info"
		nameCompany="Panadería"
		nameUser="Jorge Luis G."
		userRole="Administrador"
	></DataUserGeneral>
	<SidebarContainerBodyNavigation slot="body">
		{#each testItemsList as { nameItem, icon, isList, opened, subItems, href }}
			<ItemSidebarNavigation
				{nameItem}
				bind:openSidebar={actionSidebar}
				bind:openList={opened}
				{href}
				{isList}
			>
				<svelte:component this={icon} slot="icon"></svelte:component>
				<SidebarContainerSubItemsNavigation slot="sub-items">
					{#each subItems as { href, text }}
						<SubItemsSidebarNavigation {href}>{@html text}</SubItemsSidebarNavigation>
					{/each}
				</SidebarContainerSubItemsNavigation>
			</ItemSidebarNavigation>
		{/each}
	</SidebarContainerBodyNavigation>
	<SidebarContainerFooterNavigation slot="footer">
		<CopyRightSidebarNavigation
			company="Jorge Luis Güiza"
			year="2024"
			bind:openSidebar={actionSidebar}
		/>
	</SidebarContainerFooterNavigation>
</SidebarNavigation>

<TabBottomNavigation>
	{#each testTabsList as { color, href, icon, isList, items, nameItem, opened }}
		<ItemTabBottomNavigation {color} {href} {isList} {items} {opened} name={nameItem}>
			<svelte:component this={icon} slot="icon"></svelte:component>
		</ItemTabBottomNavigation>
	{/each}
</TabBottomNavigation>
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
