<script lang="ts">
	import InfoIcon from './InfoIcon.svelte';
	import TimeSandIcon from './TimeSandIcon.svelte';
	import WarningIcon from './WarningIcon.svelte';
	import LoadingIcon from './LoadingIcon.svelte';
	import ErrorIcon from './ErrorIcon.svelte';
	import SuccessIcon from './SuccessIcon.svelte';
	import type { TypeAlarm } from './../domains/types/TypeAlarm.type';
	export let type: TypeAlarm = 'info';
	export let className = '';
</script>

{#if type === 'success'}
	<SuccessIcon {className} />
{:else if type === 'error'}
	<ErrorIcon {className} />
{:else if type === 'loading'}
	<LoadingIcon {className} />
{:else if type === 'warning'}
	<WarningIcon {className} />
{:else if type === 'time'}
	<TimeSandIcon {className} />
{:else}
	<InfoIcon {className} />
{/if}
