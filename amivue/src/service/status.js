import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/failure/status/list",
			method: "get",
			params: params
		});
	},
	ping(params) {
		return Send({
			url: "/failure/status/device/ping",
			method: "get",
			params: params
		});
	},
	reboot(params) {
		return Send({
			url: "/failure/status/dcu/reboot",
			method: "get",
			params: params
		});
	}
};
