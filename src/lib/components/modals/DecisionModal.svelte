<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Modal from './Modal.svelte';
	import ButtonSimple from '../buttons/ButtonAction.svelte';
	import type { ThemeColor } from '../../domains/types/ThemeColor.type';
	import type { TypeModal } from '../../domains/types/TypeModal.type';
	import InfoIcon from '../../icons/InfoIcon.svelte';
	import SuccessIcon from '../../icons/SuccessIcon.svelte';
	import ErrorIcon from '../../icons/ErrorIcon.svelte';
	import LoadingIcon from '../../icons/LoadingIcon.svelte';
	import WarningIcon from '../../icons/WarningIcon.svelte';
	import TimeSandIcon from '../../icons/TimeSandIcon.svelte';

	export let nameActionButton: string;
	export let modalTitle: string;
	export let showModal = false;
	export let theme: ThemeColor = 'light';
	export let cancelButton: string = 'Cancelar';
	export let type: TypeModal = 'info';
	const dispatch = createEventDispatcher();
</script>

<Modal bind:showModal>
	<section class="content-header" slot="header">
		<div
			class={`content-icon-header ${
				type === 'success'
					? 'text-green-500 bg-green-100'
					: type === 'error'
						? 'text-red-500 bg-red-100'
						: type === 'loading'
							? 'text-gray-500 bg-gray-100'
							: type === 'warning'
								? 'text-amber-500 bg-amber-100'
								: type === 'time'
									? 'text-orange-500 bg-orange-100'
									: type === 'info'
										? 'text-sky-500 bg-sky-100'
										: 'text-gray-900 bg-gray-50'
			}`}
		>
			{#if type === 'success'}
				<SuccessIcon />
			{:else if type === 'error'}
				<ErrorIcon />
			{:else if type === 'loading'}
				<LoadingIcon />
			{:else if type === 'warning'}
				<WarningIcon />
			{:else if type === 'time'}
				<TimeSandIcon />
			{:else}
				<InfoIcon />
			{/if}
		</div>
		<h3
			class={`modal-title ${
				type === 'success'
					? 'text-green-500'
					: type === 'error'
						? 'text-red-500'
						: type === 'loading'
							? 'text-gray-500'
							: type === 'warning'
								? 'text-amber-500'
								: type === 'time'
									? 'text-orange-500'
									: type === 'info'
										? 'text-sky-500'
										: 'text-gray-900'
			}`}
		>
			{@html modalTitle}
		</h3>
	</section>
	<section class="mt-4 mx-5 text-justify">
		<slot />
	</section>
	<section class="content-footer" slot="footer">
		<ButtonSimple
			theme="danger"
			className="mx-2 mb-4 sm:mb-0"
			on:click={() => {
				showModal = false;
				dispatch('cancel');
			}}
		>
			{@html cancelButton}
		</ButtonSimple>
		<ButtonSimple isFilled={true} {theme} on:click={() => dispatch('click')} className="mx-2">
			{@html nameActionButton}
		</ButtonSimple>
	</section>
</Modal>

<style lang="postcss">
	.modal-title {
		@apply text-lg text-center font-semibold leading-6;
	}
	.content-header {
		@apply sm:flex items-center space-x-4 space-y-2 sm:space-y-0;
	}
	.content-icon-header {
		@apply mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10;
	}
	.content-footer {
		@apply flex flex-col justify-center items-center sm:flex-row sm:px-6 mt-5;
	}
</style>
