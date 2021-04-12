<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.search.estate") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select
				v-model="selected"
				@input="$emit('input', $event)"
				:options="options"
				text-field="estateName"
				value-field="estateSeq"
				:disabled="options.length == 0"
			>
				<template #first>
					<b-form-select-option :value="0" selected>-- 전체 --</b-form-select-option>
				</template>
			</b-form-select>
		</b-col>
	</b-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		region: { default: 0 }
	},
	watch: {
		region: function(/* value */) {
			this.selected = 0;
		}
	},
	computed: {
		...mapGetters({ estateList: "getEstates", getEstate: "getEstateByRegion" }),
		options() {
			if (this.region == 0) {
				return this.estateList;
			} else {
				return this.getEstate(this.region);
			}
		}
	},
	data() {
		return {
			selected: 0
		};
	}
};
</script>

<style></style>
