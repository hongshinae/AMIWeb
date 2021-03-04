import Axios from "axios";
import VueCookies from "vue-cookies";
// import Login from "@/service/login";

Axios.create({
	baseURL: "http://localhost:9099/api",
	timeout: 3000
});

Axios.interceptors.request.use(
	async function(config) {
		// 요청 성공 직전 호출됩니다.
		// axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
		config.headers.TOKEN = VueCookies.get("TOKEN");
		config.headers.REFRESH_TOKEN = VueCookies.get("REFRESH_TOKEN");
		console.log(config);

		return config;
	},
	function(error) {
		// 요청 에러 직전 호출됩니다.
		return Promise.reject(error);
	}
);

Axios.interceptors.response.use(
	function(response) {
		// http status가 200인 경우 응답 성공 직전 호출됩니다
		// .then() 으로 이어집니다.
		return response;
	},
	function(error) {
		// http status가 200인 경우 응답 에러 직전 호출됩니다
		// .catch() 로 이어집니다.
		console.log("에러일 경우", error);
		const errorAPI = error.config;
		console.log(errorAPI);

		// if (error.response.data.status === 401 && errorAPI.retry === undefined) {
		// 	errorAPI.retry = true;
		// 	console.log("토큰이 이상한 오류일 경우");
		// 	await Login.refreshToken();
		// 	return await Axios(errorAPI);
		// }

		return Promise.reject(error);
	}
);

export default Axios;
