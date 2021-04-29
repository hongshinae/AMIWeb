<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.search.statusCode") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select :value="value" @input="$emit('input', $event)" :options="$t('component.content.search.statusCodeOptions')" required>
				<template #first>
					<b-form-select-option :value="null" selected disabled>-- 선택하세요 --</b-form-select-option>
				</template>
			</b-form-select>
		</b-col>
	</b-row>
</template>

<script>
export default {
	props: ["value"]
};
</script>

<style></style>
