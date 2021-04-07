import ContentHeader from "@/components/content/ContentHeader";
import ContentSearch from "@/components/content/ContentSearch.vue";
import ContentTable from "@/components/content/ContentTable";

export default {
	components: { ContentHeader, ContentSearch, ContentTable },
	data() {
		return {
			isBusy: false,
			pageName: "페이지 제목을 넣어주세요",
			paths: [{ name: this.$t("menu.title") }, { name: "임시" }],
			regionList: [], // 필터 지역목록
			estates: [], // 필터 단지목록
			tableList: [], // 테이블 목록
			tableFields: [], // 테이블 헤더
			filterText: "",
			filterRegion: "",
			selectedItem: null
		};
	}
};
