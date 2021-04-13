<template>
	<b-form-group :label="$t('component.content.filter.firmware')">
		<b-form-select :value="selected" :options="firmwareList" @input="$emit('input', $event)">
			<template #first>
				<b-form-select-option :value="0" selected>{{ $t("component.content.filter.all") }}</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: ["selected", "firmwareList"]
};
</script>

<style></style>
