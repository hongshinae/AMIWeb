import Login from "@/service/login";

const initialState = {
	user: {
		userid: null,
		name: null,
		email: null,
		estateSeq: null,
		estateName: null,
		phone: null,
		position: null,
		level: null,
		regDate: null,
		updateDate: null
	}
};

const state = {
	user: {
		userid: null,
		name: null,
		email: null,
		estateSeq: null,
		estateName: null,
		phone: null,
		position: null,
		level: null,
		regDate: null,
		updateDate: null
	},
	token: {
		accessToken: null,
		refreshToken: null
	}
};

const getters = {
	getUser: state => state.user,
	getUserId: state => state.user.userid,
	getUserIdCount: (state, getters) => {
		return getters.getUserId.length;
	},
	getName: state => state.user.name,
	getEmail: state => state.user.email,
	getEstateSeq: state => state.user.estateSeq,
	getEstateName: state => state.user.estateName,
	getPhone: state => state.user.phone,
	getPosition: state => state.user.position,
	getLevel: state => state.user.level,
	getRegDate: state => state.user.regDate,
	getUpdateDate: state => state.user.updateDate,
	getAccessToken: state => state.user.accessToken,
	getRefreshToken: state => state.user.refreshToken
};

const mutations = {
	USER_RESET(state) {
		for (let prop in initialState) {
			if (!state) {
				state = {};
			}

			state[prop] = initialState[prop];
		}
	},
	USER(state, { userid, name, email, estateSeq, estateName, phone, position, level, regDate, updateDate }) {
		state.user.userid = userid;
		state.user.name = name;
		state.user.email = email;
		state.user.estateSeq = estateSeq;
		state.user.estateName = estateName;
		state.user.phone = phone;
		state.user.position = position;
		state.user.level = level;
		state.user.regDate = regDate;
		state.user.updateDate = updateDate;
	},
	LOGIN(state, { token, refreshToken }) {
		state.token.accessToken = token;
		state.token.refreshToken = refreshToken;
	},
	LOGOUT(state) {
		state.token.accessToken = null;
		state.token.refreshToken = null;
	}
};

const actions = {
	USER({ commit }, user) {
		commit("USER", user);
	},
	LOGIN({ commit /* dispatch */ }, { userid, password }) {
		return new Promise((resolve, reject) => {
			Login.login({ userid, password })
				.then(({ data }) => {
					commit("USER", data.response.user);
					commit("LOGIN", data.response);
					resolve(data.response);
				})
				.catch(({ response }) => {
					reject(response);
				});
		});
	},
	LOGOUT({ commit }) {
		commit("LOGOUT");
		commit("USER_RESET");
	}
};

export default {
	strict: process.env.NODE_ENV !== "production",
	state,
	getters,
	mutations,
	actions
};
