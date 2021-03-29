<template>
	<b-form-group label="filterName">
		<b-form-select v-model="selected">
			<b-form-select-option>서울</b-form-select-option>
			<b-form-select-option>경기</b-form-select-option>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: {
		filterName: String,
		filterOptions: []
	}
};
</script>

<style></style>
