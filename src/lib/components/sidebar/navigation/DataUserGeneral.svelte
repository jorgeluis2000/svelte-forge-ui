<script lang="ts">
	export let nameCompany = '';
	export let nameUser = '';
	export let userRole = '';
</script>

<div class="name-company">{nameCompany}</div>
<div class="name-user">{nameUser}</div>
<div class="user-role">{userRole}</div>

<style lang="postcss">
	.name-company {
		@apply font-semibold text-base;
	}
	.name-user {
		@apply font-medium text-sm;
	}
	.user-role {
		@apply font-light text-xs italic;
	}
</style>
