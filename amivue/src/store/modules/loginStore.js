import Login from "@/service/login";

const state = {
	accessToken: null
};

const getters = {
	getAccessToken: state => state.accessToken
};

const mutations = {
	LOGIN(state, response) {
		state.accessToken = response.token;
	},
	LOGOUT(state) {
		state.accessToken = null;
	}
};

const actions = {
	async LOGIN({ commit /*, dispatch*/ }, { userid, password }) {
		await Login.login({ userid, password })
			.then(({ data }) => {
				commit("LOGIN", data.response);
			})
			.catch(error => {
				throw error;
			});
	},
	LOGOUT({ commit }) {
		commit("LOGOUT");
	}
};

export default {
	strict: process.env.NODE_ENV !== "production",
	state: {
		...state
	},
	getters,
	mutations,
	actions
};
