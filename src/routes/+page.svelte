<script lang="ts">
	import InputFloat from '$lib/components/inputs/floats/InputFloat.svelte';
	import InputBasic from '$lib/components/inputs/simples/InputBasic.svelte';
	import InputSelectFloat from '$lib/components/inputs/floats/InputSelectFloat.svelte';
	import InputUnitSelectFloat from '$lib/components/inputs/floats/InputUnitSelectFloat.svelte';
	import type { ItemSelect } from '$lib/domains/types/Select.type';
	let inputFloat = '';
	let inputBasic = '';
	let inputSelectFloat: ItemSelect[] = [];
	let inputUnitSelectFloat: ItemSelect | null = null;
	const listItemsToShowSelect: ItemSelect[] = [
		{ name: 'algo', text: 'Test Select Float', value: '1' },
		{ name: 'algo2', text: 'Test 2 Select Float', value: '2' },
		{ name: 'algo3', text: 'Test 3 Select Float', value: '3' },
		{ name: 'algo4', text: 'Test 4 Select Float', value: '4' }
	];
</script>

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
			textManySelected="Seleccionadas"
			bind:valueInput={inputSelectFloat}
		/>
	</div>

	<div>
		<InputUnitSelectFloat
			className=""
			nameInput="input-select-float"
			labelText="Input Select Float"
			listItemsShow={listItemsToShowSelect}
			defaultText=" - "
			bind:valueInput={inputUnitSelectFloat}
		/>
	</div>
</section>
