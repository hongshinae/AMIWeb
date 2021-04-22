<template>
	<b-form-group :label="label" label-for="" class="input-ip-wrap" :state="false" invalid-feedback="invalidFeedback">
		<b-input-group>
			<div class="input-text-style">
				<b-form-input ref="ip1" :value="ip1" v-mask="'###'" placeholder="20" @input.native="handleIpInput" maxlength="3" />
				<span>.</span>
				<b-form-input ref="ip2" :value="ip2" v-mask="'###'" placeholder="101" @input.native="handleIpInput" maxlength="3" />
				<span>.</span>
				<b-form-input ref="ip3" :value="ip3" v-mask="'###'" placeholder="23" @input.native="handleIpInput" maxlength="3" />
				<span>.</span>
				<b-form-input ref="ip4" :value="ip4" v-mask="'###'" placeholder="10" @input.native="handleIpInput" maxlength="3" />
			</div>
			<b-input-group-append v-if="modify">
				<b-button variant="light" @click="handleModify">수정</b-button>
			</b-input-group-append>
		</b-input-group>
	</b-form-group>
</template>

<script>
export default {
	props: ["label", "placeholder", "value", "modify"],
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

			let ip1;
			let ip2;
			let ip3;
			let ip4;
			if (this.$refs.ip1) ip1 = this.$refs.ip1.vModelValue;
			if (this.$refs.ip2) ip2 = this.$refs.ip2.vModelValue;
			if (this.$refs.ip3) ip3 = this.$refs.ip3.vModelValue;
			if (this.$refs.ip4) ip4 = this.$refs.ip4.vModelValue;
			const ip = ip1 + "." + ip2 + "." + ip3 + "." + ip4;
			this.$emit("input", ip);
		},
		handleModify() {
			const ip1 = this.ip1;
			const ip2 = this.ip2;
			const ip3 = this.ip3;
			const ip4 = this.ip4;

			if (ip1 && ip2 && ip3 && ip4) {
				this.$emit("handle:modify", ip1 + "." + ip2 + "." + ip3 + "." + ip4);
			} else if (!ip1 && !ip2 && !ip3 && !ip4) {
				this.$emit("handle:modify", "");
			}
		}
	}
};
</script>

<style lang="scss">
.input-ip-wrap {
	.input-text-style {
		width: 156px;
		border-radius: 4px 0px 0px 4px;
		border: 1px solid #ced4da;
		padding: 5px;
		height: 32px;
	}
	input {
		width: 22%;
		height: calc(1.5em + 0.2rem);
		border-radius: 0;
		background: #f1f1f1;
		color: #000;
		display: inline;
		padding: 0.375rem 0.5rem;
		border: 0 none;
	}
	span {
		width: 4%;
		display: inline-block;
		text-align: center;
		height: 29px;
		line-height: 29px;
	}
}
#addEquipmentDcu .input-ip-wrap {
	.input-text-style {
		width: inherit;
	}
}
</style>
