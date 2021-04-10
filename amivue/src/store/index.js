import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import userStore from "@/store/modules/userStore";
import searchStore from "@/store/modules/searchStore";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: { userStore, searchStore },
	plugins: [
		createPersistedState({ paths: ["userStore.token.refreshToken"], storage: window.localStorage, overwrite: true }),
		createPersistedState({
			paths: ["userStore.token.accessToken", "userStore.user", "searchStore.regions", "searchStore.estates"],
			storage: window.sessionStorage,
			overwrite: true
		})
	]
});

export default store;
