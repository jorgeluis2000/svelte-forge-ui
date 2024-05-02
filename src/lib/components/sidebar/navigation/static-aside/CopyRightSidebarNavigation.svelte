<script lang="ts">
	export let openSidebar: boolean;
	export let year: string = '';
	export let company: string = '';
	export let href: string = '/';
</script>

<section class="container" title={`Copyright © ${year} ${company}`}>
	<span class={`copyright ${openSidebar ? 'inactive' : 'activate'}`}> Copyright © {year} </span>
	<span class={`copyright ${openSidebar ? 'activate' : 'inactive'}`}>
		Copyright © {year}
		<a {href} rel="noreferrer" class="hover:underline font-bold">{company}</a></span
	>
</section>

<style lang="postcss">
	.container {
		background-color: var(--color700);
		@apply pt-5 pb-3;
	}
	.copyright {
		@apply text-xs text-gray-200 text-center mx-5;
	}
	.copyright.inactive {
		@apply hidden w-0 opacity-0;
	}
	.copyright.activate {
		@apply block w-auto opacity-100;
	}
</style>
