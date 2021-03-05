import Vue from "vue";
import Vuex from "vuex";
import Login from "@/service/login";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		accessToken: null
	},
	getters: {
		getAccessToken: state => {
			return state.accessToken;
		}
	},
	mutations: {
		LOGIN(state, { accessToken }) {
			state.accessToken = accessToken;
		},
		LOGOUT(state) {
			state.accessToken = null;
		}
	},
	actions: {
		LOGIN({ commit /*, dispatch*/ }, { userid, password }) {
			Login.login({ userid, password })
				.then(result => {
					commit("LOGIN", result.data.response);
				})
				.catch(result => {
					//dispatch("LOGOUT");	// action내 action 처리가능
					console.log(result);
				});
		},
		LOGOUT({ commit }) {
			commit("LOGOUT");
		}
	},
	modules: {}
});
export default store;
