import Axios from "axios";
import Store from "@/store";
import router from "@/routes";
import locale from "@/locales";

const axios = Axios.create({
	baseURL: "/api",
	// baseURL: "http://localhost:18099",
	timeout: 3000
});

axios.interceptors.request.use(
	async function(config) {
		// 요청 성공 직전 호출됩니다.
		// axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
		config.headers["x-token"] = Store.state.userStore.token.accessToken;
		config.headers.REFRESH_TOKEN = Store.state.userStore.token.refreshToken;
		config.headers["Access-Control-Allow-Origin"] = "*";
		config.headers["Access-Control-Allow-Headers"] = "*";
		// config.headers["Content-Type"] = "application/json; charset = utf-8";

		return config;
	},
	function(error) {
		// 요청 에러 직전 호출됩니다.
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function(response) {
		// Response Success

		return response;
	},
	function(error) {
		// Response Error
		const errorAPI = error.config;

		if (error && error.response && error.response.data.status === 401 && errorAPI.retry === undefined) {
			errorAPI.retry = true;
			// 	console.log("토큰이 이상한 오류일 경우");
			// 	await Login.refreshToken();
			// return await Axios(errorAPI);
			router.push("/login");
			alert(locale.t("msg.session.expired"));
			// Store.dispatch("LOGOUT")
			// 	.then(() => {
			// 		router.push("/login");
			// 	})
			// 	.catch(({ response }) => {
			// 		alert(response.data.response.error_message);
			// 	});
		}

		return Promise.reject(error);
		// return error;
	}
);

export default axios;
// export default {
// 	install(Vue) {
// 		Vue.prototype.$axios = Axios;
// 	}
// };
