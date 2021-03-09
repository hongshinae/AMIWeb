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
	getUser: state => {
		state.userid, state.email, state.info, state.level, state.name, state.password, state.phone, state.regdate;
	},
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
	USER(state, userid, email, info, level, name, password, phone, regdate) {
		state.userid = userid;
		state.email = email;
		state.info = info;
		state.level = level;
		state.name = name;
		state.password = password;
		state.phone = phone;
		state.regdate = regdate;
	},
	USERID(state, userid) {
		state.userid = userid;
	},
	EMAIL(state, email) {
		state.email = email;
	},
	INFO(state, info) {
		state.info = info;
	},
	LEVEL(state, level) {
		state.level = level;
	},
	NAME(state, name) {
		state.name = name;
	},
	PASSWORD(state, password) {
		state.password = password;
	},
	PHONE(state, phone) {
		state.phone = phone;
	},
	REGDATE(state, regdate) {
		state.regdate = regdate;
	}
};

const actions = {
	USER({ commit }) {
		commit("USER");
	},
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
