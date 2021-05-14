<template>
	<b-form-group :label="label" label-for="" class="install-Location">
		<b-input-group :prepend="$t('common.placeholder.latitude')" :class="{ modify }">
			<b-form-input
				type="number"
				:value="latitude"
				@input="$emit('update:latitude', Number($event))"
				:min="-90"
				:max="90"
				:placeholder="$t('common.placeholder.latitude')"
			/>
		</b-input-group>
		<b-input-group :prepend="$t('common.placeholder.longitude')" :class="{ modify }">
			<b-form-input
				type="number"
				:value="longitude"
				@input="$emit('update:longitude', Number($event))"
				:min="-90"
				:max="90"
				:placeholder="$t('common.placeholder.longitude')"
			/>
		</b-input-group>
		<b-button v-show="modify" variant="light" @click="handleModify">확인</b-button>
	</b-form-group>
</template>

<script>
export default {
	props: {
		label: String,
		placeholder: String,
		latitude: { type: Number, requried: true },
		longitude: { type: Number, requried: true },
		modify: { type: Boolean, requried: true }
	},
	data() {
		return {};
	},
	methods: {
		handleModify() {
			this.$emit("handle:modify", this.latitude, this.longitude);
		}
	}
};
</script>

<style lang="scss">
@import "~@/assets/scss/components/location​.scss";
</style>
