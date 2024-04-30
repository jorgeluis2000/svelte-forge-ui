<script lang="ts">
	import { onMount } from 'svelte';
	import type { IntoCompany } from '$lib/domains/types/SEO.type';

	export let title: string;
	export let author: string;
	export let company: IntoCompany;
	export let copyright: string;
	export let description: string;
	export let audience: string = 'all';
	export let keywords: string;
	export let image: string;
	export let category: string;
	export let language: string;
	export let type: string = 'website';
	export let icon = 'favicon.svg';
	let url = '';
	let hostname = '';
	onMount(() => {
		url = window.location.href;
		hostname = window.location.hostname;
	});
</script>

<title>{title}</title>
<!-- Important SEO -->
<link rel="icon" type="image/svg+xml+ico+png" href={icon} />
<meta name="author" content={author} />
<meta name="copyright" content={copyright} />
<meta name="robots" content="index,all,follow" />
<meta name="language" content={language} />
<meta name="audience" content={audience} />
<meta name="keywords" content={keywords} />
<meta name="category" content={category} />
<meta itemprop="image" content={image} />
<meta itemprop="name" content={company.name} />
{#each company.address as addr}
	<meta itemprop="address" content={addr} />
{/each}
{#each company.telephone as tel}
	<meta itemprop="telephone" content={tel} />
{/each}
<meta name="apple-mobile-web-app-title" content={title} />
<link rel="canonical" href={url} />
<meta property="og:type" content={type} />
<!-- Facebook SEO -->
<meta property="og:url" content={url} />
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<!-- Twitter SEO -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:domain" content={hostname} />
<meta name="twitter:url" content={url} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image:src" content={image} />
