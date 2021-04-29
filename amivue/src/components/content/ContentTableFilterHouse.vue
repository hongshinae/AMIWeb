<template>
	<b-form-group :label="$t('component.content.filter.houseName')">
		<b-form-input :value="text" :placeholder="$t('common.placeholder.houseName')" @input="$emit('input', $event)" autocomplete="off" />
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
