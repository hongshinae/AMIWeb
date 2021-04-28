import Send from "@/axios";

export default {
	dcuList(params) {
		return Send({
			url: "/device/nms/dcu/list",
			method: "get",
			params
		});
	},
	dcuRebootList(data) {
		return Send({
			url: "/device/nms/dcu/reboot/list",
			method: "post",
			data
		});
	},
	modemList(params) {
		return Send({
			url: "/device/nms/modem/list",
			method: "get",
			params
		});
	}
};
