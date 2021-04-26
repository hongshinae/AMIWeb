<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.search.date") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-datepicker
				value="dateSelected"
				placeholder="조회날짜"
				:date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
				@input="$emit('input', $event)"
				required
			/>
		</b-col>
	</b-row>
</template>

<script>
export default {
	props: ["dateSelected"]
};
</script>

<style></style>
