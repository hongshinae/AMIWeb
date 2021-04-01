import Send from "@/axios";

export default {
	region() {
		return Send({
			url: "/search/region",
			method: "get"
		});
	},
	estate(params) {
		return Send({
			url: "/search/estate",
			method: "get",
			params: params
		});
	},
	estateList() {
		return Send({
			url: "/device/estate/list",
			method: "get"
		});
	}
};
