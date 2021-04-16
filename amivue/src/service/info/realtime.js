import Send from "@/axios";

export default {
	realtime(params) {
		return Send({
			url: "/metering/info/realtime",
			method: "get",
			params: params
		});
	}
};
