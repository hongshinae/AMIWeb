import Send from "@/axios";

export default {
	region() {
		return Send({
			url: "/search/region",
			method: "get"
		});
	},
	estateList() {
		return Send({
			url: "/search/region",
			method: "get"
		});
	}
};
