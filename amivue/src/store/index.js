import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import loginStore from "@/store/modules/loginStore";
import userStore from "@/store/modules/userStore";
// import Login from "@/service/login";

Vue.use(Vuex);

const store = new Vuex.Store({
	// state: {
	// 	accessToken: null
	// },
	// getters: {
	// 	getAccessToken: state => {
	// 		return state.accessToken;
	// 	}
	// },
	// mutations: {
	// 	LOGIN(state, response) {
	// 		console.log(response.token);
	// 		state.accessToken = response.token;
	// 	},
	// 	LOGOUT(state) {
	// 		state.accessToken = null;
	// 	}
	// },
	// actions: {
	// 	async LOGIN({ commit /*, dispatch*/ }, { userid, password }) {
	// 		await Login.login({ userid, password })
	// 			.then(({ data }) => commit("LOGIN", data.response))
	// 			.catch(error => {
	// 				throw error;
	// 			});
	// 	},
	// 	LOGOUT({ commit }) {
	// 		commit("LOGOUT");
	// 	}
	// },
	modules: { loginStore, userStore },
	plugins: [createPersistedState("loginStore")]
});

export default store;
