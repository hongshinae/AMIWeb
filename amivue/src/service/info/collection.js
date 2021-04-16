import Send from "@/axios";

export default {
	dcu(params) {
		return Send({
			url: "/metering/info/collection/dcu",
			method: "get",
			params: params
		});
	},
	meter(params) {
		return Send({
			url: "/metering/info/collection/meter",
			method: "get",
			params: params
		});
	}
};
