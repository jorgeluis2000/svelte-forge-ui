<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Modal from './Modal.svelte';
	import ButtonAction from '../buttons/ButtonAction.svelte';
	import type { TypeAlarm } from '../../domains/types/TypeAlarm.type';
	import { cssVariables, getCustomStyle } from '$lib/functions/Styles.functions';
	import {
		DEFAULT_ALARM,
		DEFAULT_COLOR_ERROR,
		DEFAULT_COLOR_HEX,
		DEFAULT_COLOR_SUCCESS,
		DEFAULT_THEME
	} from '$lib/constants/DefaultStyles.constants';
	import { COLOR_ALARM_STYLE } from '$lib/constants/Styles.constants';
	import IconsAlarm from '$lib/icons/IconsAlarm.svelte';
	import { generateColorScale, transformListToObject } from '$lib/functions/Colors.functions';

	export let nameActionButton: string;
	export let modalTitle: string;
	export let showModal = false;
	export let cancelButton: string;
	export let theme: string = DEFAULT_THEME;
	export let colorHex: string = DEFAULT_COLOR_HEX;
	export let type: TypeAlarm = 'info';
	export let useCss: boolean = false;

	const dispatch = createEventDispatcher();
	let styleAlarm = getCustomStyle(COLOR_ALARM_STYLE, type, DEFAULT_ALARM).class;
	let listColors = transformListToObject(generateColorScale(styleAlarm), styleAlarm);
	let colorIconText = useCss ? `var(--${theme}-500)` : listColors['500'];
	let colorIconBg = useCss ? `var(--${theme}-100)` : listColors['100'];
	let colorTitle = useCss ? `var(--${theme}-500)` : listColors['500'];
</script>

<Modal {colorHex} {useCss} {theme} bind:showModal>
	<section class="content-header" slot="header">
		<div
			use:cssVariables={{
				colorIconText,
				colorIconBg
			}}
			class={`content-icon-header `}
		>
			<IconsAlarm {type} />
		</div>
		<h3
			use:cssVariables={{
				colorTitle
			}}
			class={`modal-title `}
		>
			{@html modalTitle}
		</h3>
	</section>
	<section class="mt-4 mx-5 text-justify">
		<slot />
	</section>
	<section class="content-footer" slot="footer">
		<ButtonAction
			className="mx-2 mb-4 sm:mb-0"
			rounded="lg"
			colorHex={DEFAULT_COLOR_ERROR}
			on:click={() => {
				showModal = false;
				dispatch('cancel');
			}}
		>
			{@html cancelButton}
		</ButtonAction>
		<ButtonAction
			isFilled
			colorHex={DEFAULT_COLOR_SUCCESS}
			rounded="lg"
			on:click={() => dispatch('click')}
			className="mx-2"
		>
			{@html nameActionButton}
		</ButtonAction>
	</section>
</Modal>

<style lang="postcss">
	.modal-title {
		color: var(--colorTitle);
		@apply text-lg text-center font-semibold leading-6;
	}

	.content-header {
		@apply sm:flex items-center space-x-4 space-y-2 sm:space-y-0;
	}
	.content-icon-header {
		background-color: var(--colorIconBg);
		color: var(--colorIconText);
		@apply mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10;
	}
	.content-footer {
		@apply flex flex-col justify-center items-center sm:flex-row sm:px-6 mt-5;
	}
</style>
