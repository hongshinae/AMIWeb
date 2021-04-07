import Send from "@/axios";

export default {
	list() {
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
