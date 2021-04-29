<template>
	<b-form-group :label="$t('component.content.filter.day')">
		<b-form-select :value="value" :options="dayList" @input="$emit('input', $event)">
			<template #first>
				<b-form-select-option :value="null" selected>{{ $t("component.content.filter.all") }}</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: ["value", "dayList"]
};
</script>

<style></style>
