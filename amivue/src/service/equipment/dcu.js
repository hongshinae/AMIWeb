import Send from "@/axios";

export default {
	list(params) {
		return Send({
			url: "/device/equipment/dcu/list",
			method: "get",
			params: params
		});
	},
	registration(data) {
		return Send({
			url: "/device/equipment/dcu/registration",
			method: "post",
			data: data
		});
	},
	info(params) {
		return Send({
			url: "/device/equipment/dcu/info",
			method: "get",
			params: params
		});
	},
	delete(params) {
		return Send({
			url: "/device/equipment/dcu/delete",
			method: "get",
			params: params
		});
	},
	updateDcuIp(params) {
		return Send({
			url: "/device/equipment/dcu/update/dcuip",
			method: "get",
			params: params
		});
	},
	updateDcuPort(params) {
		return Send({
			url: "/device/equipment/dcu/update/port",
			method: "get",
			params: params
		});
	},
	updateRouterIp(params) {
		return Send({
			url: "/device/equipment/dcu/update/routerip",
			method: "get",
			params: params
		});
	},
	updateLocation(params) {
		return Send({
			url: "/device/equipment/dcu/update/location",
			method: "get",
			params: params
		});
	},
	settingTime(params) {
		return Send({
			url: "/device/equipment/dcu/setting/time",
			method: "get",
			params: params
		});
	},
	settingReboot(params) {
		return Send({
			url: "/device/equipment/dcu/setting/reboot",
			method: "get",
			params: params
		});
	},
	settingRescan(params) {
		return Send({
			url: "/device/equipment/dcu/setting/rescan",
			method: "get",
			params: params
		});
	}
};
