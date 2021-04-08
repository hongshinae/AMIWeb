<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.estate") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select
				:value="value"
				@input="$emit('input', $event)"
				:options="options"
				text-field="estateName"
				value-field="estateSeq"
				:disabled="options.length == 0"
			>
				<template #first>
					<b-form-select-option value="0" selected>-- 전체 --</b-form-select-option>
				</template>
			</b-form-select>
		</b-col>
	</b-row>
</template>

<script>
import Search from "@/service/search";

export default {
	props: {
		selected: { default: "0" },
		region: { default: "0" }
	},
	mounted() {
		this.searchEstates(this.region);
	},
	watch: {
		region: function(value) {
			this.searchEstates(value);
		}
	},
	computed: {
		value() {
			return this.itemSelected ? this.itemSelected : this.selected;
		}
	},
	data() {
		return {
			itemSelected: this.selected,
			options: []
		};
	},
	methods: {
		async searchEstates(value) {
			this.options = [];
			const response = await Search.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.options = result;
		}
	}
};
</script>

<style></style>
