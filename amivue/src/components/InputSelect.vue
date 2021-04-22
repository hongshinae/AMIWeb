<template>
	<b-form-group :label="label" label-for="">
		<b-form-select :value="value" @input="$emit('input', $event)" :options="options" :disabled="disabled" />
	</b-form-group>
</template>

<script>
export default {
	props: ["label", "placeholder", "value", "options", "disabled"]
};
</script>
