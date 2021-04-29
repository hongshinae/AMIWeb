<template>
	<b-form-group :label="$t('component.content.filter.readingType')">
		<b-form-select :value="value" :options="meterReadingDayList" @input="$emit('input', $event)">
			<template #first>
				<b-form-select-option :value="null" selected>{{ $t("component.content.filter.all") }}</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: ["value", "meterReadingDayList"]
};
</script>

<style></style>
