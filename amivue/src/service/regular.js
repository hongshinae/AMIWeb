import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/metering/regular/list",
			method: "get",
			params: params
		});
	}
};
