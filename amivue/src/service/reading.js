import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/failure/reading/list",
			method: "get",
			params: params
		});
	}
};
