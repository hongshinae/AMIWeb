import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/device/equipment/meter/list",
			method: "get",
			params: params
		});
	},
	info(params) {
		return Send({
			url: "/device/equipment/meter/info",
			method: "get",
			params: params
		});
	},
	delete(params) {
		return Send({
			url: "/device/equipment/meter/delete",
			method: "get",
			params: params
		});
	}
};
