<script lang="ts">
	import ButtonAction from '$lib/components/buttons/ButtonAction.svelte';
	import ContainerToast from '$lib/components/toasts/ContainerToast.svelte';
	import TimeSandIcon from '$lib/icons/TimeSandIcon.svelte';
	import { addLoadingToast, addToast, updateToast, generateID } from '$lib/stores/ToastStore';

	function eventNewToast() {
		const myId = generateID();

		addToast({ id: myId, message: 'Loading data...', type: 'warning' });
	}

	function eventNewToastLoading() {
		const myId = generateID();

		addLoadingToast({ id: myId, message: 'Loading data...' });
		updateToast({ id: myId, message: 'New Message now', type: 'error' });
	}
</script>

<ContainerToast></ContainerToast>

<ButtonAction rounded="md" textSize="sm" thereIsIcon on:click={eventNewToast}>
	<div slot="icon">
		<TimeSandIcon />
	</div>
	Add a new Toast
</ButtonAction>

<ButtonAction rounded="md" textSize="sm" thereIsIcon on:click={eventNewToastLoading}>
	<div slot="icon">
		<TimeSandIcon />
	</div>
	Add a new Toast Loading
</ButtonAction>
