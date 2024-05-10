<script lang="ts">
	import Modal from '$lib/components/modals/Modal.svelte';
	import ButtonAction from '$lib/components/buttons/ButtonAction.svelte';
	import DecisionModal from '$lib/components/modals/DecisionModal.svelte';
	import ModalHeader from '$lib/components/modals/ModalHeader.svelte';
	import ModalFooter from '$lib/components/modals/ModalFooter.svelte';

	let showModalMain = false;
	let showModalDecisionInfo = false;
	let showModalDecisionError = false;
	let showModalDecisionWarning = false;
	let showModalDecisionSuccess = false;
	let showModalDecisionLoading = false;
	let showModalDecisionTime = false;
	let colorPrimary = '#2980B9';
</script>

<div class="flex w-full" id="textareas">
	<h2 class="text-xl font-semibold">Modals Section</h2>
</div>

<ButtonAction
	colorHex={colorPrimary}
	textSize="sm"
	isFilled
	on:click={() => {
		showModalMain = true;
	}}>Open Modal Main!</ButtonAction
>

<Modal colorHex="#179f8b" fullScreen bind:showModal={showModalMain}>
	<ModalHeader slot="header">
		Ejemplo: <span class="font-bold text-primary-500">Modal</span>
	</ModalHeader>
	<section>Hello world</section>
	<ButtonAction colorHex={colorPrimary} sizeIcon="lg" theme="error">Hello world</ButtonAction>
	<ModalFooter
		className="mt-5"
		textCancel="Cancel"
		textAction="Action"
		rounded="md"
		textSize="sm"
		bind:showModal={showModalMain}
	/>
</Modal>

<div class="flex w-full" id="textareas">
	<h2 class="text-xl font-semibold">Modals Decision</h2>
</div>

<section class="flex justify-sart items-center gap-3">
	<ButtonAction
		colorHex={colorPrimary}
		textSize="sm"
		rounded="md"
		on:click={() => {
			showModalDecisionInfo = true;
		}}>Open Modal Decision Info!</ButtonAction
	>

	<ButtonAction
		colorHex={colorPrimary}
		textSize="sm"
		rounded="md"
		on:click={() => {
			showModalDecisionError = true;
		}}>Open Modal Decision Error!</ButtonAction
	>
	<ButtonAction
		colorHex={colorPrimary}
		textSize="sm"
		rounded="md"
		on:click={() => {
			showModalDecisionSuccess = true;
		}}>Open Modal Decision Success!</ButtonAction
	>
	<ButtonAction
		colorHex={colorPrimary}
		textSize="sm"
		rounded="md"
		on:click={() => {
			showModalDecisionWarning = true;
		}}>Open Modal Decision Warning!</ButtonAction
	>

	<ButtonAction
		colorHex={colorPrimary}
		textSize="sm"
		rounded="md"
		on:click={() => {
			showModalDecisionLoading = true;
		}}>Open Modal Decision Loading!</ButtonAction
	>

	<ButtonAction
		colorHex={colorPrimary}
		textSize="sm"
		rounded="md"
		on:click={() => {
			showModalDecisionTime = true;
		}}>Open Modal Decision Time!</ButtonAction
	>
</section>

<DecisionModal
	bind:showModal={showModalDecisionInfo}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="info"
>
	Hello world
</DecisionModal>

<DecisionModal
	bind:showModal={showModalDecisionError}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="error"
>
	Hello world
</DecisionModal>

<DecisionModal
	bind:showModal={showModalDecisionWarning}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="warning"
>
	Hello world
</DecisionModal>

<DecisionModal
	bind:showModal={showModalDecisionSuccess}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="success"
>
	Hello world
</DecisionModal>

<DecisionModal
	bind:showModal={showModalDecisionLoading}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="loading"
>
	Hello world
</DecisionModal>

<DecisionModal
	bind:showModal={showModalDecisionTime}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="time"
>
	Hello world
</DecisionModal>
