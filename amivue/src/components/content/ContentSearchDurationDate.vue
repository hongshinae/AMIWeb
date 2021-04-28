<template>
	<b-row>
		<b-col lg="2">
			<label class="d-block">{{ $t("component.content.search.duration") }}</label>
		</b-col>
		<b-col lg="4">
			<b-form-datepicker
				:value="fromDate"
				:date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
				@input="$emit('update:fromDate', $event)"
				required
			/>
		</b-col>
		<b-col lg="1">
			~
		</b-col>
		<b-col lg="4">
			<b-form-datepicker
				:value="toDate"
				:date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
				@input="$emit('update:toDate', $event)"
				required
			/>
		</b-col>
	</b-row>
</template>

<script>
export default {
	props: ["fromDate", "toDate"]
};
</script>

<style></style>
