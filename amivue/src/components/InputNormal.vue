<template>
	<b-form-group :label="label" label-for="">
		<b-form-input :value="value" @input="$emit('input', $event)" :placeholder="placeholder"></b-form-input>
	</b-form-group>
</template>

<script>
export default {
	props: ["label", "placeholder", "value"]
};
</script>
