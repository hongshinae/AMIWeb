import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/device/equipment/dcu/list",
			method: "get",
			params: params
		});
	},
	registration(data) {
		return Send({
			url: "/device/equipment/dcu/registration",
			method: "post",
			data: data
		});
	},
	info(params) {
		return Send({
			url: "/device/equipment/dcu/info",
			method: "get",
			params: params
		});
	},
	delete(params) {
		return Send({
			url: "/device/equipment/dcu/delete",
			method: "get",
			params: params
		});
	}
};
