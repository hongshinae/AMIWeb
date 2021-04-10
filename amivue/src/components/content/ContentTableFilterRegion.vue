<template>
	<b-form-group :label="$t('component.content.region')">
		<b-form-select
			text-field="regionName"
			value-field="regionSeq"
			:value="selected"
			:options="regionList"
			@input="$emit('input', $event)"
			@change="$emit('init-filter-text')"
		>
			<template #first>
				<b-form-select-option value="0" selected>-- 전체 --</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: ["selected"],
	computed: {
		...mapGetters({ regionList: "getRegions" })
	}
};
</script>

<style></style>
