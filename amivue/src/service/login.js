export default {
	async login(param) {
		return await this.$axios({
			url: "/login",
			method: "get",
			param: param
		});
	},
	async refreshToken() {
		return await this.$axios({
			url: "/refreshToken",
			method: "get"
		});
	}
};
/*
export async function login() {
	try {
		const token = await this.$axios.get("/login");
		VueCookies.set("token", token.data.data.token, "60s");
		VueCookies.set("refresh_token", token.data.data.refresh_token, "30d");
		this.$axios.defaults.headers["refresh_token"] = VueCookies.get("refresh_token");
		return token;
	} catch (err) {
		return err;
	}
}

export async function refreshToken() {
	try {
		const token = await this.$axios.get("/refreshToken");
		VueCookies.set("token", token.data.data.token, "60s");
		return token;
	} catch (err) {
		return err;
	}
}
*/
