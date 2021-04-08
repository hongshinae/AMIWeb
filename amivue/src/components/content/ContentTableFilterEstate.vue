<template>
	<b-form-group :label="$t('component.content.estate')">
		<b-form-input :value="text" :placeholder="$t('component.content.placeholder.estate')" @input="$emit('input', $event)" />
	</b-form-group>
</template>

<script>
export default {
	model: {
		prop: "text"
	},
	props: ["text"]
};
</script>

<style></style>
