<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.search.dcuId") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select
				v-model="selected"
				@input="handleInput"
				:options="options"
				text-field="buildingFields"
				value-field="buildingValues"
				:disabled="options.length == 0"
				required
			>
				<template #first>
					<b-form-select-option :value="null" selected disabled>{{ nullMessage }}</b-form-select-option>
				</template>
			</b-form-select>
		</b-col>
	</b-row>
</template>

<script>
import Search from "@/service/search";

export default {
	props: {
		region: { default: null },
		estate: { default: null }
	},
	watch: {
		region: function(/* value */) {
			this.selected = null;
			this.options = [];
		},
		estate: function(value) {
			this.selected = null;
			this.options = [];

			if (value != null) {
				this.getBuildingList();
			}
		}
	},
	computed: {
		nullMessage() {
			if (this.isBusy) {
				return this.$t("msg.loading");
			}

			return "-- 선택하세요 --";
		}
	},
	data() {
		return {
			selected: null,
			options: [],
			isBusy: false
		};
	},
	methods: {
		async getBuildingList() {
			try {
				this.isBusy = true;
				const response = await Search.building({ estateSeq: this.estate });
				const result = response.data.response;
				this.options = result.map(item => {
					item.buildingFields = item.buildingName + " (" + item.dcuId + ")";
					item.buildingValues = { buildingSeq: item.buildingSeq, dcuId: item.dcuId };
					return item;
				});
			} catch (error) {
				const result = [];
				this.options = result;
			} finally {
				this.isBusy = false;
			}
		},
		handleInput($event) {
			this.$emit("input", $event);
		}
	}
};
</script>

<style></style>
