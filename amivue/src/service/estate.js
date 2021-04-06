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
	registration(data) {
		return Send({
			url: "/device/estate/registration",
			method: "post",
			data: data
		});
	},
	info(params) {
		return Send({
			url: "/device/estate/info",
			method: "get",
			params: params
		});
	}
};
