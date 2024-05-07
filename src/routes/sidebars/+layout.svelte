<script lang="ts">
	import CopyRightSidebarNavigation from '$lib/components/sidebar/navigation/static-aside/CopyRightSidebarNavigation.svelte';
	import SubItemsSidebarNavigation from '$lib/components/sidebar/navigation/static-aside/SubItemsSidebarNavigation.svelte';
	import type { ItemList, ItemTabList } from '$lib';
	import { ButtonAction } from '$lib/components/buttons';
	import SeoGenerate from '$lib/components/seo/SEOGenerate.svelte';
	import { Sidebar, SidebarNavigation } from '$lib/components/sidebar';
	import DataUserGeneral from '$lib/components/sidebar/navigation/static-aside/DataUserGeneral.svelte';
	import ItemSidebarNavigation from '$lib/components/sidebar/navigation/static-aside/ItemSidebarNavigation.svelte';
	import SidebarContainerBodyNavigation from '$lib/components/sidebar/navigation/static-aside/SidebarContainerBodyNavigation.svelte';
	import { RobotColorIcon, ConfigurationColorIcon, SuccessIcon, ErrorIcon } from '$lib/icons';
	import {
		TabBottomNavigation,
		ItemTabBottomNavigation,
		SidebarContainerSubItemsNavigation,
		SidebarContainerFooterNavigation,
		TabBottomContainerSubItemsNavigation,
		SubItemTabBottomNavigation,
		TabBottomContainerGroupSubItemNavigation,
		ContainerReactiveSidebarNavigation
	} from '$lib/components/sidebar';

	const companyInto = { name: 'Jorge Luis Güiza Granobles', address: [''], telephone: [''] };
	let actionSidebar = false;
	let actionSidebarPos = false;

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
			nameItem: 'Hello World'
		},
		{
			color: 'red',
			href: '/errors',
			isList: true,
			icon: RobotColorIcon,
			opened: false,
			items: [],
			nameItem: 'Sidebars'
		},
		{
			color: 'red',
			href: '/sidebars',
			isList: true,
			icon: ErrorIcon,
			opened: false,
			items: [
				{
					title: 'Components actions',
					items: [
						{
							color: '#179F67',
							href: '/buttons',
							text: 'buttons',
							icon: RobotColorIcon
						}
					]
				},
				{
					title: 'Components Inputs',
					items: [
						{
							color: '#5DADE2',
							href: '/inputs',
							text: 'Inputs',
							icon: RobotColorIcon
						},
						{
							color: '#F1C40F',
							href: '/textarea',
							text: 'Text Areas',
							icon: RobotColorIcon
						}
					]
				}
			],
			nameItem: 'Sidebars'
		}
	];
</script>

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

<section class="">
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
	<Sidebar position="left" bind:openSidebar={actionSidebarPos}>Hello World</Sidebar>
	<!-- Encabezado del Tab Navigation -->
	<TabBottomNavigation responsive>
		{#each testTabsList as { color, href, icon, isList, items, nameItem, opened }}
			<!-- Botones del tab navigation -->
			<ItemTabBottomNavigation {color} {href} {isList} bind:opened name={nameItem}>
				<svelte:component this={icon} slot="icon"></svelte:component>
			</ItemTabBottomNavigation>

			<!-- Contenedor de los sub items del tab navigation -->
			<TabBottomContainerSubItemsNavigation bind:opened>
				{#each items as { title, items: subItems }}
					<!-- Grupo de sub items del tab navigation -->
					<TabBottomContainerGroupSubItemNavigation {title}>
						{#each subItems as item}
							<SubItemTabBottomNavigation colorHex={item.color} name={item.text} href={item.href}>
								<svelte:component this={item.icon} slot="icon"></svelte:component>
							</SubItemTabBottomNavigation>
						{/each}
					</TabBottomContainerGroupSubItemNavigation>
				{/each}
			</TabBottomContainerSubItemsNavigation>
		{/each}
	</TabBottomNavigation>
</section>

<ContainerReactiveSidebarNavigation>
	<div class="container-title" id="textareas">
		<h2 class="text-xl font-semibold">Sidebars Section</h2>
	</div>

	<slot />
	<section class="w-full space-y-5">
		<ButtonAction
			on:click={() => (actionSidebar = !actionSidebar)}
			type="button"
			rounded="md"
			textSize="sm"
		>
			<span>Open Sidebar</span>
		</ButtonAction>
		<ButtonAction
			on:click={() => (actionSidebarPos = !actionSidebarPos)}
			type="button"
			rounded="md"
			textSize="sm"
		>
			<span>Open Sidebar Right</span>
		</ButtonAction>
	</section>
</ContainerReactiveSidebarNavigation>

<style lang="postcss">
	.container-title {
		@apply flex w-full;
	}
</style>
