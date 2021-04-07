import Send from "@/axios";

export default {
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
