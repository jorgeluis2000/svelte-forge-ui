<script lang="ts">
	import InputNumberFloat from '$lib/inputs/floats/InputNumberFloat.svelte';
	import InputNumber from '$lib/inputs/simples/InputNumber.svelte';
	let inputNumberValue = '';
	let inputNumberFloatValue = '';
</script>

<section class="m-5 space-y-10">
	<div class="flex w-full" id="inputs">
		<h1 class="text-2xl font-bold">Inputs Section</h1>
	</div>
	<div class="flex w-full" id="inputs">
		<h2 class="text-xl font-semibold">Inputs Section</h2>
	</div>
	<div>
		<InputNumber
			className=""
			labelText="Input Number"
			nameInput="input-number"
			placeholder="placeholder"
			bind:inputValue={inputNumberValue}
		/>
	</div>

	<div>
		<InputNumberFloat
			className=""
			nameInput="input-number-float"
			labelText="Input Number Float"
			bind:valueInput={inputNumberFloatValue}
			maxlength={2}
		/>
	</div>
</section>
