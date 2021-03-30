<template>
	<b-form-group :label="label">
		<b-form-input
			type="search"
			:value="value"
			:placeholder="placeholder"
			class="form-control"
			list="filterList"
			@update="$emit('update:selected', { eventName: eventName, value: $event })"
			autocomplete="off"
		/>
		<b-form-datalist id="filterList" :options="options" />
	</b-form-group>
</template>

<script>
export default {
	props: {
		label: { type: String, default: "filter" },
		options: { type: Array },
		placeholder: { type: String, default: "unknown" },
		eventName: String,
		value: String
	}
};
</script>

<style></style>
