<script lang="ts">
	import TextAreaNatural from '$lib/components/textareas/simples/TextAreaNatural.svelte';
	import TextAreaSimple from '$lib/components/textareas/simples/TextAreaSimple.svelte';
	import TextAreaFloat from '$lib/components/textareas/floats/TextAreaFloat.svelte';

	let textAreaNatural = '';
</script>

<div class="flex w-full" id="textareas">
	<h2 class="text-xl font-semibold">Text Area Section</h2>
</div>

<div>
	<TextAreaNatural
		nameInput="textarea-natural"
		placeholder="Text Area Natural"
		textSize="base"
		rounded="none"
		bind:valueInput={textAreaNatural}
	/>
</div>
<div>
	<TextAreaSimple
		labelText="Text Area Simple"
		nameInput="textarea-simple"
		placeholder="Text Area Simple"
		textSize="base"
		rounded="none"
		bind:valueInput={textAreaNatural}
	/>
</div>

<div>
	<TextAreaFloat
		labelText="Text Area Float"
		nameInput="textarea-float"
		textSize="base"
		rounded="none"
		bind:valueInput={textAreaNatural}
	/>
</div>
