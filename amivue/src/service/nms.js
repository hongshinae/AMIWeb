import Send from "@/axios";

export default {
	dcuList(params) {
		return Send({
			url: "/device/nms/dcu/list",
			method: "get",
			params
		});
	}
};
