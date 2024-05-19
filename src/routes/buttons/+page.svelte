<script>
	import ButtonCircleIcon from './../../lib/components/buttons/ButtonCircleIcon.svelte';
	import ButtonAction from '$lib/components/buttons/ButtonAction.svelte';
	import { ErrorIcon, SuccessIcon } from '$lib/icons';
</script>

<div class="flex w-full" id="textareas">
	<h2 class="text-xl font-semibold">Buttons Section</h2>
</div>
<section class="container-buttons-text">
	<ButtonAction type="submit" rounded="md" textSize="sm" sizeIcon="md">First Test Btn</ButtonAction>
	<ButtonAction type="submit" rounded="md" textSize="sm" sizeIcon="md" isFilled thereIsIcon>
		<SuccessIcon slot="icon" />
		First Test Btn
	</ButtonAction>
	<ButtonAction type="submit" rounded="md" textSize="sm" sizeIcon="md" isFilled thereIsIcon>
		<SuccessIcon slot="icon" />
		First Test Btn
	</ButtonAction>
</section>

<div class="flex w-full" id="textareas">
	<h2 class="text-xl font-semibold">Buttons Circule Section</h2>
</div>

<section class="container-buttons">
	<ButtonCircleIcon btnSize="xl" sizeIcon="lg" isFilled>
		<SuccessIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="lg" sizeIcon="md" isFilled>
		<ErrorIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="md" sizeIcon="base" isFilled>
		<SuccessIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="base" sizeIcon="sm" isFilled>
		<ErrorIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="sm" sizeIcon="xs" isFilled>
		<ErrorIcon />
	</ButtonCircleIcon>
</section>
<section class="container-buttons-circle">
	<ButtonCircleIcon btnSize="xl" sizeIcon="lg">
		<SuccessIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="lg" sizeIcon="md">
		<ErrorIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="md" sizeIcon="base">
		<SuccessIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="base" sizeIcon="sm">
		<ErrorIcon />
	</ButtonCircleIcon>
	<ButtonCircleIcon btnSize="sm" sizeIcon="xs">
		<ErrorIcon />
	</ButtonCircleIcon>
</section>

<style lang="postcss">
	.container-buttons-circle {
		@apply flex flex-col md:flex-row gap-3;
	}
	.container-buttons {
		@apply flex flex-col md:flex-row gap-3;
	}
	.container-buttons-text {
		@apply flex flex-col lg:flex-row items-center justify-between gap-3 w-full px-5;
	}
</style>
