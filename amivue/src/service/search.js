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
	building(params) {
		return Send({
			url: "/search/building",
			method: "get",
			params: params
		});
	}
};
