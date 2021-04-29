import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/failure/code/list",
			method: "get",
			params: params
		});
	}
};
