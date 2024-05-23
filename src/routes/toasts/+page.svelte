<script lang="ts">
	import ButtonAction from '$lib/components/buttons/ButtonAction.svelte';
	import InputUnitSelectFloat from '$lib/components/inputs/floats/InputUnitSelectFloat.svelte';
	import ContainerToast from '$lib/components/toasts/ContainerToast.svelte';
	import TimeSandIcon from '$lib/icons/TimeSandIcon.svelte';
	import { addLoadingToast, addToast, updateToast, generateID } from '$lib/stores/ToastStore';
	import type { ItemSelect } from '$lib';
	import type { TypeToast } from '$lib/domains/interfaces/Toast.interface';

	let selectUnitTag: ItemSelect | null = null;
	const listAlarm: ItemSelect[] = [
		{ name: 'I am a success message', text: 'Success', value: 'success' },
		{ name: 'I am a error message', text: 'Error', value: 'error' },
		{ name: 'I am a info message', text: 'Info', value: 'info' },
		{ name: 'I am a warning message', text: 'Warning', value: 'warning' },
		{ name: 'I am a loading message', text: 'Loading', value: 'loading' },
		{ name: 'I am a time message', text: 'Time', value: 'time' }
	];

	function eventNewToast() {
		addToast({
			message: selectUnitTag?.name ?? 'I am a error message',
			type: (selectUnitTag?.value as TypeToast) ?? 'error',
			dismissible: true,
			timeout: 4000
		});
	}

	function eventNewToastLoading() {
		const myId = generateID();
		addLoadingToast({ id: myId, message: 'Loading data...' });
		setInterval(() => {
			updateToast({
				id: myId,
				message: 'New Message now',
				type: 'error'
			});
		}, 1000);
	}

	function eventNewToastCustom() {
		addToast({
			message: 'New Toast Custom...',
			type: 'custom',
			dismissible: true,
			timeout: 4000,
			component: TimeSandIcon
		});
	}
</script>

<ContainerToast sizeIcon="sm"></ContainerToast>
<section class="mx-2 md:mx-5 space-y-5">
	<InputUnitSelectFloat
		labelText="Icons toast"
		nameInput="input-float-icon-select"
		listItemsShow={listAlarm}
		rounded="md"
		textSize="sm"
		textSizeTags="sm"
		defaultText=" - "
		placeholderSearch="Search"
		bind:valueInput={selectUnitTag}
	/>

	<div class="flex w-full" id="textareas">
		<h2 class="text-xl font-semibold">Toasts Section</h2>
	</div>

	<section class="flex justify-center items-end gap-3">
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

		<ButtonAction rounded="md" textSize="sm" thereIsIcon on:click={eventNewToastCustom}>
			<div slot="icon">
				<TimeSandIcon />
			</div>
			Add a new Toast Custom
		</ButtonAction>
	</section>
</section>
