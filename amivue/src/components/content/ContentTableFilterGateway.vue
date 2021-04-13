<template>
	<b-form-group :label="$t('component.content.filter.gateway')">
		<b-form-input :value="text" :placeholder="$t('component.content.filter.placeholder.gateway')" @input="$emit('input', $event)" autocomplete="off" />
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
