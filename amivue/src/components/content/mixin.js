import ContentHeader from "@/components/content/ContentHeader";
import ContentSearch from "@/components/content/ContentSearch.vue";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { ContentHeader, ContentSearch, ContentTable },
	data() {
		return {
			isBusy: false,
			pageName: "페이지 제목을 넣어주세요",
			paths: [{ name: this.$t("menu.title") }, { name: "임시" }]
		};
	}
};
