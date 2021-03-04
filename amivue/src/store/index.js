import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		accessToken: null
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
		LOGIN({ commit }, { userId, password }) {
			return this.$axios.get("/login", { userId, password }).then(({ data }) => commit("LOGIN", data));
		},
		LOGOUT({ commit }) {
			commit("LOGOUT");
		}
	},
	modules: {}
});
