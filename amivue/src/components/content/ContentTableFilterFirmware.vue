<template>
	<b-form-group :label="$t('component.content.filter.firmware')">
		<b-form-select :value="value" :options="firmwareList" @input="$emit('input', $event)">
			<template #first>
				<b-form-select-option :value="null" selected>{{ $t("component.content.filter.all") }}</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: ["value", "firmwareList"]
};
</script>

<style></style>
