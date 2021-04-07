<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.estate") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-input
				:value="text"
				:placeholder="$t('component.content.placeholder.estate')"
				@input="$emit('input', $event)"
				list="filterList"
				autocomplete="off"
			/>
			<b-form-datalist id="filterList" :options="options" />
		</b-col>
	</b-row>
</template>

<script>
import Estate from "@/service/estate";

export default {
	props: ["text", "region"],
	mounted() {
		this.searchEstates(this.region);
	},
	watch: {
		region: function(value) {
			this.searchEstates(value);
		}
	},
	data() {
		return {
			options: []
		};
	},
	methods: {
		async searchEstates(value) {
			const response = await Estate.estate({ regionSeq: value });
			const estates = response.data.response;
			const result = estates.map(estate => estate.estateName);
			this.options = result;
		}
	}
};
</script>

<style></style>
