<template>
	<b-form-group :label="$t('component.content.filter.region')">
		<b-form-select
			text-field="regionName"
			value-field="regionSeq"
			:value="value"
			:options="regionList"
			@input="$emit('input', $event)"
			@change="$emit('init-filter-text')"
		>
			<template #first>
				<b-form-select-option :value="null" selected>{{ $t("component.content.filter.all") }}</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: ["value"],
	computed: {
		...mapGetters({ regionList: "getRegions" })
	}
};
</script>

<style></style>
