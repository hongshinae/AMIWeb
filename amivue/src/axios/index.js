import Axios from "axios";
import VueCookies from "vue-cookies";
import { refreshToken } from "@/service/login";

Axios.defaults.baseURL = "http://localhost:9099/api";

// Add a request interceptor
Axios.interceptors.request.use(
	async function(config) {
		// Do something before request is sent
		config.headers.TOKEN = VueCookies.get("TOKEN");
		config.headers.REFRESH_TOKEN = VueCookies.get("REFRESH_TOKEN");

		console.log(config);
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
Axios.interceptors.response.use(
	function(response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	async function(error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		console.log("에러일 경우", error.config);
		const errorAPI = error.config;
		if (error.response.data.status === 401 && errorAPI.retry === undefined) {
			errorAPI.retry = true;
			console.log("토큰이 이상한 오류일 경우");
			await refreshToken();
			return await Axios(errorAPI);
		}
		return Promise.reject(error);
	}
);

export default Axios;
