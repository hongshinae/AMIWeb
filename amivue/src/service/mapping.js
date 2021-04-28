import Send from "@/axios";

export default {
	mappingList(params) {
		return Send({
			url: "/device/mapping/estate",
			method: "get",
			params
		});
	}
};
