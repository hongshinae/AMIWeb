import Send from "@/axios";

export default {
	system() {
		return Send({
			url: "/device/server/system",
			method: "get"
		});
	}
};
