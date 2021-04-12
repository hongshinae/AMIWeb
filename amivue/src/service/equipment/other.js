import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/device/equipment/other/list",
			method: "get",
			params: params
		});
	},
	info(params) {
		return Send({
			url: "/device/equipment/other/info",
			method: "get",
			params: params
		});
	}
};
