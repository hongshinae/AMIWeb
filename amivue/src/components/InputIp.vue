<template>
	<b-form-group :label="label" label-for="" class="input-ip-wrap">
		<b-form-input ref="ip1" :value="ip1" v-mask="'###'" placeholder="20" @input.native="handleIpInput" />
		<span>.</span>
		<b-form-input ref="ip2" :value="ip2" v-mask="'###'" placeholder="101" @input.native="handleIpInput" />
		<span>.</span>
		<b-form-input ref="ip3" :value="ip3" v-mask="'###'" placeholder="235" @input.native="handleIpInput" />
		<span>.</span>
		<b-form-input ref="ip4" :value="ip4" v-mask="'###'" placeholder="100" @input.native="handleIpInput" />
	</b-form-group>
</template>

<script>
export default {
	props: ["label", "placeholder", "value"],
	computed: {
		ip1() {
			if (this.value) {
				let array = this.value.split(".");

				if (array.length > 0) {
					return array[0];
				} else {
					return "";
				}
			}

			return "";
		},
		ip2() {
			if (this.value) {
				let array = this.value.split(".");

				if (array.length > 1) {
					return array[1];
				} else {
					return "";
				}
			}

			return "";
		},
		ip3() {
			if (this.value) {
				let array = this.value.split(".");

				if (array.length > 2) {
					return array[2];
				} else {
					return "";
				}
			}

			return "";
		},
		ip4() {
			if (this.value) {
				let array = this.value.split(".");

				if (array.length > 3) {
					return array[3];
				} else {
					return "";
				}
			}

			return "";
		}
	},
	methods: {
		handleIpInput(event) {
			if (event.target.value.length >= 3) {
				if (event.target.nextSibling && event.target.nextSibling.focus) {
					event.target.nextSibling.nextSibling.focus();
					event.target.nextSibling.nextSibling.select();
				}
			} else if (event.target.value == "") {
				if (event.target.previousSibling) {
					event.target.previousSibling.previousSibling.focus();
					event.target.previousSibling.previousSibling.select();
				}
			}

			const ip1 = this.$refs.ip1.vModelValue;
			const ip2 = this.$refs.ip2.vModelValue;
			const ip3 = this.$refs.ip3.vModelValue;
			const ip4 = this.$refs.ip4.vModelValue;
			const ip = ip1 + "." + ip2 + "." + ip3 + "." + ip4;
			this.$emit("input", ip);
		}
	}
};
</script>

<style lang="scss">
.input-ip-wrap {
	input {
		width: 22%;
		display: inline;
	}
	span {
		width: 4%;
		display: inline-block;
		text-align: center;
		height: 29px;
		line-height: 29px;
	}
}
</style>
