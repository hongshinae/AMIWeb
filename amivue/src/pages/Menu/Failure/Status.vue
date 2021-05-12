<template>
	<div class="main-bg content">
		<dcu-ping :dcuId="selectedItem.dcuId" :dcuIp="selectedItem.dcuIp"></dcu-ping>
		<router-ping :dcuId="selectedItem.dcuId" :dcuIp="selectedItem.dcuIp" :routerIp="selectedItem.routerIp"></router-ping>
		<content-header :pageName="pageName" :paths="paths" />
		<content-search :shows="shows" @handle:searchItem="searchItemList"> </content-search>
		<div class="dcu-list-wrap">
			<div class="blank-box" v-show="statusList.length == 0">
				<span>
					<img src="@/assets/svg/monitor_empty.svg" />
					<b-icon icon="three-dots" animation="cylon" font-scale="2"></b-icon>
				</span>
				<p>{{ $t("msg.search.emptyText") }}</p>
			</div>
			<b-row>
				<dcu-status
					v-for="(item, index) in statusList"
					:key="index"
					:item="item"
					@handle:dcuPing="handleDcuPing"
					@handle:routerPing="handleRouterPing"
				/>
			</b-row>
		</div>
		<div class="overlay-wrap">
			<b-overlay id="overlay-background" :show="isLoading" variant="light" opacity="0.85" blur="2px" rounded="sm" />
		</div>
	</div>
</template>
<script>
import Status from "@/service/status";
import ContentMixin from "@/components/content/mixin";
import DcuPing from "@/components/modal/DcuPing";
import RouterPing from "@/components/modal/RouterPing";
import DcuStatus from "@/components/DcuStatus";

export default {
	mixins: [ContentMixin],
	props: {
		shows: {
			type: Array,
			default: function() {
				return [["region", "estate"]];
			}
		}
	},
	components: { DcuPing, RouterPing, DcuStatus },
	data() {
		return {
			pageName: this.$t("menu.failure.status"),
			paths: [
				{ name: this.$t("menu.title"), bicon: "house", link: "/" },
				{ name: this.$t("menu.failure.title") },
				{ name: this.$t("menu.failure.status") }
			],
			statusList: [],
			isLoading: false,
			selectedItem: {}
		};
	},
	methods: {
		async getReadingList(params) {
			try {
				this.isLoading = true;
				const response = await Status.list(params);
				const result = response.data.response;
				this.statusList = result;
			} catch (error) {
				const result = [];
				this.statusList = result;
			} finally {
				this.isLoading = false;
			}
		},
		handleDcuPing(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("dcuPing");
		},
		handleRouterPing(selectedItem) {
			this.selectedItem = selectedItem;
			this.$bvModal.show("routerPing");
		},
		searchItemList(searchItem) {
			this.getReadingList(searchItem);
		}
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/pages/status.scss";
</style>
