<template>
	<b-form-group :label="$t('component.content.filter.building')">
		<b-form-input :value="text" :placeholder="$t('common.placeholder.region')" @input="$emit('input', $event)" autocomplete="off" />
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
