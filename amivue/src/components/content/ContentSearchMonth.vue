<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.search.date") }}</label>
		</b-col>
		<b-col lg="8">
			<vue-monthly-picker
				:inputClass="{ input: true, monthly: true }"
				:value="value"
				placeHolder="월을 선택해주세요."
				dateFormat="YYYY-MM"
				@selected="handleSelect"
				:monthLabels="$t('common.monthLabels')"
			/>
		</b-col>
	</b-row>
</template>

<script>
import VueMonthlyPicker from "vue-monthly-picker";

export default {
	props: ["value"],
	components: { VueMonthlyPicker },
	methods: {
		handleSelect(value) {
			this.$emit("input", value.format("YYYY-MM"));
		}
	}
};
</script>

<style></style>
