<script lang="ts">
	export let valueText: string = '';
    export let bgColorHex: string = '';
    export let borderColorHex: string = '';
    export let textColorHex: string = '';

    const bgColorClass = `bg-[${bgColorHex}]`
    const borderColorClass = `bg-[${borderColorHex}]`
    const textColorClass = `bg-[${textColorHex}]`
</script>

<div class="content-tag">
	<p class="w-full font-medium text-sm text-primary-500 truncate">
		{valueText}
        <slot/>
	</p>
</div>

<style lang="postcss">
	.content-tag {
		@apply flex items-center justify-center px-4 py-1 h-5 bg-primary-100 rounded-full border border-primary-500 mx-1;
	}
</style>
