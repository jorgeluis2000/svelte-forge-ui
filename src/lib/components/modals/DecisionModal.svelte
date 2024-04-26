<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Modal from './Modal.svelte';
	import ButtonAction from '../buttons/ButtonAction.svelte';
	import type { ThemeColor } from '../../domains/types/ThemeColor.type';
	import type { TypeAlarm } from '../../domains/types/TypeAlarm.type';
	import { getCustomStyle } from '../../functions/Styles.functions';
	import { COLOR_TEXT_ALARM_STYLE } from './../../constants/Styles.constants';
	import { DEFAULT_ALARM } from './../../constants/DefaultStyles.constants';
	import { COLOR_ALARM_STYLE } from './../../constants/Styles.constants';
	import IconsAlarm from '$lib/icons/IconsAlarm.svelte';

	export let nameActionButton: string;
	export let modalTitle: string;
	export let showModal = false;
	export let theme: ThemeColor = 'light';
	export let cancelButton: string = 'Cancelar';
	export let type: TypeAlarm = 'info';
	const dispatch = createEventDispatcher();
	const styleIconAlarm = getCustomStyle(COLOR_ALARM_STYLE, type, DEFAULT_ALARM).class;
	const styleTitleAlarm = getCustomStyle(COLOR_TEXT_ALARM_STYLE, type, DEFAULT_ALARM).class;
</script>

<Modal bind:showModal>
	<section class="content-header" slot="header">
		<div class={`content-icon-header ${styleIconAlarm}`}>
			<IconsAlarm {type} />
		</div>
		<h3 class={`modal-title ${styleTitleAlarm}`}>
			{@html modalTitle}
		</h3>
	</section>
	<section class="mt-4 mx-5 text-justify">
		<slot />
	</section>
	<section class="content-footer" slot="footer">
		<ButtonAction
			theme="error"
			className="mx-2 mb-4 sm:mb-0"
			on:click={() => {
				showModal = false;
				dispatch('cancel');
			}}
		>
			{@html cancelButton}
		</ButtonAction>
		<ButtonAction isFilled={true} {theme} on:click={() => dispatch('click')} className="mx-2">
			{@html nameActionButton}
		</ButtonAction>
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
