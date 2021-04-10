import Search from "@/service/search";

const state = {
	regions: [],
	estates: []
};

const getters = {
	getRegions: state => state.regions,
	getEstates: state => state.estates,
	getEstateByRegion: state => regionSeq => {
		return state.estates.filter(estate => estate.regionSeq === regionSeq);
	}
};

const mutations = {
	REGIONS(state, regions) {
		state.regions = regions;
	},
	ESTATES(state, estates) {
		state.estates = estates;
	},
	SEARCH_RESET(state) {
		state.regions = [];
		state.estates = [];
	}
};

const actions = {
	REGIONS({ commit }) {
		return new Promise((resolve, reject) => {
			Search.region()
				.then(({ data }) => {
					commit("REGIONS", data.response);
					resolve(data.response);
				})
				.catch(({ response }) => {
					reject(response);
				});
		});
	},
	ESTATES({ commit /* dispatch */ }) {
		return new Promise((resolve, reject) => {
			Search.estate({ regionSeq: 0 })
				.then(({ data }) => {
					commit("ESTATES", data.response);
					resolve(data.response);
				})
				.catch(({ response }) => {
					reject(response);
				});
		});
	}
};

export default {
	strict: process.env.NODE_ENV !== "production",
	state,
	getters,
	mutations,
	actions
};
