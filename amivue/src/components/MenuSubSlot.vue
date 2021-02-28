<template>
	<div class="container">
		<li>
			<slot name="link">
				<router-link to="/complexManagement"><a>단지 관리</a></router-link>
			</slot>
		</li>
	</div>
</template>
<script>
export default {
	name: "MenuSlot"
};
</script>
