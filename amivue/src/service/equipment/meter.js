import Send from "@/axios";

export default {
	count() {
		return Send({
			url: "/device/equipment/meter/count",
			method: "get"
		});
	},
	list(params) {
		return Send({
			url: "/device/equipment/meter/list",
			method: "get",
			params: params
		});
	},
	info(params) {
		return Send({
			url: "/device/equipment/meter/info",
			method: "get",
			params: params
		});
	},
	delete(params) {
		return Send({
			url: "/device/equipment/meter/delete",
			method: "get",
			params: params
		});
	},
	settingTime(params) {
		return Send({
			url: "/device/equipment/meter/setting/time",
			method: "get",
			params: params
		});
	},
	settingReadingDay(params) {
		return Send({
			url: "/device/equipment/meter/setting/readingday",
			method: "get",
			params: params
		});
	},
	settingPeriod(params) {
		return Send({
			url: "/device/equipment/meter/setting/period",
			method: "get",
			params: params
		});
	}
};
