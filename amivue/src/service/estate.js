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
	},
	registration(params) {
		return Send({
			url: "/device/estate/registration",
			method: "post",
			data: params
		});
	}
};
