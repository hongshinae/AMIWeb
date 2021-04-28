<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.search.durationType") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select :value="value" @input="$emit('input', $event)" :options="$t('component.content.search.durationTypeOptions')" required disabled />
		</b-col>
	</b-row>
</template>

<script>
export default {
	props: ["value"]
};
</script>

<style></style>
