<template>
	<div>
		<content-search @handle:searchItem="searchItemList" />
		<content-table
			:isBusy="isBusy"
			:items="realtimeList"
			:fields="realtimeFields"
			:isPerPage="true"
			:showFilterList="showFilterList"
			:excelFileName="$t('estate.excelFileName')"
			:excelSheetName="$t('info.tab.realtime')"
		>
			<template #table-header-left-head>
				<b-button v-b-modal="'addBuilding'" variant="light">
					<b-icon icon="pencil-fill"></b-icon>
					{{ $t("building.button.add") }}
				</b-button>
			</template>
			<template v-slot:table-header-right> </template>
		</content-table>
	</div>
</template>

<script>
import Realtime from "@/service/info/realtime";
import ContentMixin from "@/components/content/mixin";

export default {
	mixins: [ContentMixin],
	props: {
		showFilterList: {
			type: Array,
			default: function() {
				return ["region", "estate"];
			}
		}
	},
	data() {
		return {
			pageName: this.$t("menu.device.building"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.device.title") },
				{ name: this.$t("menu.device.building") }
			],
			realtimeList: [],
			realtimeFields: [
				{
					key: "regionName",
					label: this.$t("component.content.table.houseName"),
					sortable: true,
					sortDirection: "asc"
				},
				{
					key: "estateName",
					label: this.$t("component.content.table.estateName")
				},
				{
					key: "buildingName",
					label: this.$t("component.content.table.buildingName")
				},
				{
					key: "dcuId",
					label: this.$t("component.content.table.dcuId")
				},
				{
					key: "systemState",
					label: this.$t("component.content.table.systemState")
				},
				{
					key: "_remark",
					label: ""
				}
			]
		};
	},
	methods: {
		async getRealtimeList(params) {
			if (!params) {
				params = { regionSeq: "0", estateSeq: "0" };
			}

			try {
				this.isBusy = true;
				const response = await Realtime.realtime(params);
				const result = response.data.response;
				this.buildingList = result;
			} catch (error) {
				const result = [];
				this.buildingList = result;
			} finally {
				this.isBusy = false;
			}
		},
		searchItemList: function(searchItem) {
			this.getRealtimeList(searchItem);
		}
	}
};
</script>

<style></style>
