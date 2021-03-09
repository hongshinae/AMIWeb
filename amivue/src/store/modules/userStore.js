const state = {
	userid: null,
	email: null,
	info: null,
	level: null,
	name: null,
	password: null,
	phone: null,
	regdate: null
};

const getters = {
	getUserId: state => state.userid,
	getEmail: state => state.email,
	getInfo: state => state.info,
	getLevel: state => state.level,
	getName: state => state.name,
	getPassword: state => state.password,
	getPhone: state => state.phone,
	getRegdate: state => state.regdate
};

const mutations = {
	USERID(state, userid) {
		state.accessToken = userid;
	},
	EMAIL(state, email) {
		state.accessToken = email;
	},
	INFO(state, info) {
		state.accessToken = info;
	},
	LEVEL(state, level) {
		state.accessToken = level;
	},
	NAME(state, name) {
		state.accessToken = name;
	},
	PASSWORD(state, password) {
		state.accessToken = password;
	},
	PHONE(state, phone) {
		state.accessToken = phone;
	},
	REGDATE(state, regdate) {
		state.accessToken = regdate;
	}
};

const actions = {
	USERID({ commit }) {
		commit("USERID");
	},
	EMAIL({ commit }) {
		commit("EMAIL");
	},
	INFO({ commit }) {
		commit("INFO");
	},
	LEVEL({ commit }) {
		commit("LEVEL");
	},
	NAME({ commit }) {
		commit("NAME");
	},
	PASSWORD({ commit }) {
		commit("PASSWORD");
	},
	PHONE({ commit }) {
		commit("PHONE");
	},
	REGDATE({ commit }) {
		commit("REGDATE");
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
