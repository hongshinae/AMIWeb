import Send from "@/axios";
import Store from "@/store";
import { EventSourcePolyfill } from "event-source-polyfill";

export default {
	system(sec) {
		if (!sec && sec != 0) {
			console.log(sec);
			sec = 30;
		}

		const token = Store.state.userStore.token.accessToken;
		return new EventSourcePolyfill("/api/device/server/system?duration=" + sec, {
			headers: { "x-token": token },
			format: "json",
			withCredentials: true,
			heartbeatTimeout: 300000
		});
	},
	device() {
		return Send({
			url: "/device/server/registration/device",
			method: "get"
		});
	},
	list() {
		return Send({
			url: "/device/server/list",
			method: "get"
		});
	},
	detail() {
		return Send({
			url: "/device/server/detail",
			method: "get"
		});
	}
};
