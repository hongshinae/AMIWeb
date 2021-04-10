import Send from "@/axios";

export default {
	login(params) {
		return Send({
			url: "/login",
			method: "get",
			params: params
		});
	},
	refreshToken() {
		return Send({
			url: "/refreshToken",
			method: "get"
		});
	}
};
