<template>
	<b-form-group :label="label">
		<b-form-select
			:value="selected"
			:options="options"
			:text-field="text_field"
			:value-field="value_field"
			@input="$emit('update:selected', { eventName: eventName, value: $event })"
		>
			<template #first>
				<b-form-select-option value="0" selected>-- 전체 --</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: {
		label: { type: String, default: "filter" },
		options: Array,
		text_field: String,
		value_field: String,
		selected: String,
		eventName: String
	}
};
</script>

<style></style>
