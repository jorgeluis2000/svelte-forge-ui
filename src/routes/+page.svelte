<script lang="ts">
	import InputFloat from '$lib/components/inputs/floats/InputFloat.svelte';
	import InputBasic from '$lib/components/inputs/simples/InputBasic.svelte';
	import InputSelectFloat from '$lib/components/inputs/floats/InputSelectFloat.svelte';
	import InputUnitSelectFloat from '$lib/components/inputs/floats/InputUnitSelectFloat.svelte';
	import type { ItemSelect } from '$lib/domains/types/Select.type';
	import InputNatural from '$lib/components/inputs/simples/InputNatural.svelte';
	import SeoGenerate from '$lib/components/seo/SEOGenerate.svelte';
	import TextAreaNatural from '$lib/components/textareas/simples/TextAreaNatural.svelte';
	import TextAreaSimple from '$lib/components/textareas/simples/TextAreaSimple.svelte';
	import TextAreaFloat from '$lib/components/textareas/floats/TextAreaFloat.svelte';
	let inputFloat = '';
	let inputBasic = '';
	let textAreaNatural = '';
	let inputSelectFloat: ItemSelect[] = [];
	let inputUnitSelectFloat: ItemSelect | null = null;
	const listItemsToShowSelect: ItemSelect[] = [
		{ name: 'algo', text: 'Test Select Float', value: '1' },
		{ name: 'algo2', text: 'Test 2 Select Float', value: '2' },
		{ name: 'algo3', text: 'Test 3 Select Float', value: '3' },
		{ name: 'algo4', text: 'Test 4 Select Float', value: '4' }
	];
</script>

<svelte:head>
	<SeoGenerate
		title="Examples page"
		author="Jorge Luis Güiza Granobles"
		category="Lib for Svelte"
		company={{ name: 'Jorge Luis Güiza Granobles', address: [''], telephone: [''] }}
		copyright="MIT"
		description="This page contains the example content of each component created."
		icon="favicon.png"
		image=""
		keywords="lib,help,svelte,components,ui"
		language="en"
	/>
</svelte:head>
<section class="m-5 space-y-10">
	<div class="flex w-full" id="inputs">
		<h1 class="text-2xl font-bold">Components</h1>
	</div>

	<div class="flex w-full" id="inputs">
		<h2 class="text-xl font-semibold">Inputs Section</h2>
	</div>
	<div>
		<InputBasic
			type="text"
			className=""
			nameInput="input-basic"
			labelText="Input Basic"
			placeholder="Input Basic"
			rounded="none"
			textSize="sm"
			bind:valueInput={inputBasic}
		/>
	</div>
	<div>
		<InputNatural
			type="text"
			className=""
			nameInput="input-natural"
			placeholder="Input Natural"
			rounded="none"
			textSize="sm"
			bind:valueInput={inputBasic}
		/>
	</div>
	<div>
		<InputFloat
			type="text"
			className=""
			nameInput="input-float"
			labelText="Input Float"
			textSize="sm"
			bind:valueInput={inputFloat}
		/>
	</div>

	<div>
		<InputSelectFloat
			className=""
			nameInput="input-select-float"
			labelText="Input Select Float"
			listItemsShow={listItemsToShowSelect}
			defaultText=" - "
			textManySelected="Selects"
			placeholderSearch="Search"
			rounded="none"
			roundedTags="full"
			textSize="base"
			textSizeTags="base"
			bind:valueInput={inputSelectFloat}
		/>
	</div>

	<div>
		<InputUnitSelectFloat
			className=""
			nameInput="input-select-unit-float"
			labelText="Input Unit Select Float"
			listItemsShow={listItemsToShowSelect}
			defaultText=" - "
			placeholderSearch="Search"
			rounded="none"
			roundedTags="full"
			textSize="base"
			textSizeTags="base"
			bind:valueInput={inputUnitSelectFloat}
		/>
	</div>

	<div class="flex w-full" id="textareas">
		<h2 class="text-xl font-semibold">Text Area Section</h2>
	</div>

	<div>
		<TextAreaNatural
			nameInput="textarea-natural"
			placeholder="Text Area Natural"
			textSize="base"
			rounded="none"
			maxlength={10}
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
			maxlength={2}
			bind:valueInput={textAreaNatural}
		/>
	</div>

	<div>
		<TextAreaFloat
			labelText="Text Area Float"
			nameInput="textarea-float"
			textSize="base"
			rounded="none"
			maxlength={2}
			bind:valueInput={textAreaNatural}
		/>
	</div>
</section>
