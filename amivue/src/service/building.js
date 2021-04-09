import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/device/building/list",
			method: "get",
			params: params
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
	},
	namecheck(params) {
		return Send({
			url: "/device/building/namecheck",
			method: "get",
			params: params
		});
	},
	dcucheck(params) {
		return Send({
			url: "/device/building/dcucheck",
			method: "get",
			params: params
		});
	},
	update(data) {
		return Send({
			url: "/device/building/update",
			method: "post",
			data: data
		});
	},
	delete(params) {
		return Send({
			url: "/device/building/delete",
			method: "get",
			params: params
		});
	}
};
