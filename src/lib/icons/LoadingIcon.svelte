<script>
	export let className = '';
</script>

<svg class={`${className} animate-spin`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
		opacity=".25"
	/>
	<circle class="animate-dash-path fill-white" cx="12" cy="2.5" r="1.5" />
</svg>
