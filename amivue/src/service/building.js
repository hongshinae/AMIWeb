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
	list() {
		return Send({
			url: "/device/building/list",
			method: "get"
		});
	},
	registration(data) {
		return Send({
			url: "/device/building/registration",
			method: "post",
			data: data
		});
	},
	info(params) {
		return Send({
			url: "/device/building/info",
			method: "get",
			params: params
		});
	}
};
