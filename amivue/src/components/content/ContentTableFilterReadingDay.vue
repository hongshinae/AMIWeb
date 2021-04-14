<template>
	<b-form-group :label="$t('component.content.filter.readingDay')">
		<b-form-select :value="selected" :options="readingDayList" @input="$emit('input', $event)">
			<template #first>
				<b-form-select-option :value="0" selected>{{ $t("component.content.filter.all") }}</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: ["selected", "readingDayList"]
};
</script>

<style></style>
