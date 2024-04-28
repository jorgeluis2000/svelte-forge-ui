<script lang="ts">
	import Modal from '$lib/components/modals/Modal.svelte';
	import ButtonAction from '$lib/components/buttons/ButtonAction.svelte';
	import DecisionModal from '$lib/components/modals/DecisionModal.svelte';
	import InputUnitSelectFloat from '$lib/components/inputs/floats/InputUnitSelectFloat.svelte';
	import type { TypeAlarm } from '$lib/domains/types/TypeAlarm.type.ts';
	import type { ItemSelect } from '$lib';
	import { onMount } from 'svelte';

	let showModalMain = false;
	let showModalDecision = false;
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

<ButtonAction
	colorHex={colorPrimary}
	textSize="sm"
	rounded="md"
	on:click={() => {
		showModalDecision = true;
	}}>Open Modal Decision!</ButtonAction
>

<Modal bind:showModal={showModalMain}>
	<section>Hello world</section>
	<ButtonAction colorHex={colorPrimary} sizeIcon="lg" theme="error">Hello world</ButtonAction>
</Modal>

<DecisionModal
	bind:showModal={showModalDecision}
	cancelButton="Cancelar"
	modalTitle="Hello world"
	nameActionButton="Enviar"
	colorHex="#179f8b"
	type="info"
>
	Hello world
</DecisionModal>
