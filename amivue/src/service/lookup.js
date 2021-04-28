import Send from "@/axios";

export default {
	lpCycleList(params) {
		return Send({
			url: "/metering/lookup/lp/cycle",
			method: "get",
			params: params
		});
	},
	lpHoursList(params) {
		return Send({
			url: "/metering/lookup/lp/hour",
			method: "get",
			params: params
		});
	},
	lpHoursChart(params) {
		return Send({
			url: "/metering/lookup/lp/hour/chart",
			method: "get",
			params: params
		});
	},
	lpDurationList(params) {
		return Send({
			url: "/metering/lookup/lp/duration",
			method: "get",
			params: params
		});
	},
	lpDurationChart(params) {
		return Send({
			url: "/metering/lookup/lp/duration/chart",
			method: "get",
			params: params
		});
	}
};
