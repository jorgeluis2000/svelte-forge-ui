<script lang="ts">
	import InputFloat from '$lib/inputs/floats/InputFloat.svelte';
	import InputBasic from '$lib/inputs/simples/InputBasic.svelte';
	let inputFloat = '';
	let inputBasic = '';
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
			nameInput="input-f-float"
			labelText="Input Basic"
			placeholder="Input Basic"
			bind:valueInput={inputBasic}
		/>
	</div>
	<div>
		<InputFloat
			type="text"
			className=""
			nameInput="input-float"
			labelText="Input Float"
			bind:valueInput={inputFloat}
		/>
	</div>
</section>
