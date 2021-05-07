import Send from "@/axios";

export default {
	mappingList(params) {
		return Send({
			url: "/device/mapping/estate",
			method: "get",
			params
		});
	},
	historyList(params) {
		return Send({
			url: "/device/mapping/history/list",
			method: "get",
			params
		});
	},
	historyDetail(params) {
		return Send({
			url: "/device/mapping/history/detail",
			method: "get",
			params
		});
	},
	insert(data) {
		return Send({
			url: "/device/mapping/insert",
			method: "post",
			data: data
		});
	}
};
