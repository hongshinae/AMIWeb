<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.region") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select :value="selected" @input="$emit('input', $event)" :options="regionList" text-field="regionName" value-field="regionSeq">
				<template #first>
					<b-form-select-option value="0" selected>-- 전체 --</b-form-select-option>
				</template>
			</b-form-select>
		</b-col>
	</b-row>
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
