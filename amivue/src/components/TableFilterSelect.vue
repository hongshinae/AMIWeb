<template>
	<b-form-group :label="label">
		<b-form-select
			:value="selected"
			:options="options"
			:text-field="text_field"
			:value-field="value_field"
			@input="$emit('update:selected', { eventName: eventName, value: $event })"
		/>
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
