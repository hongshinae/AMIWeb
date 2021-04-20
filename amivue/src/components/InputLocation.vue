<template>
	<b-form-group :label="label" label-for="" class="install-Location">
		<b-input-group :prepend="$t('common.placeholder.latitude')">
			<b-form-input
				type="number"
				:value="latitude"
				@input="$emit('update:latitude', Number($event))"
				:min="-90"
				:max="90"
				:placeholder="$t('common.placeholder.latitude')"
			/>
		</b-input-group>
		<b-input-group :prepend="$t('common.placeholder.longitude')">
			<b-form-input
				type="number"
				:value="longitude"
				@input="$emit('update:longitude', Number($event))"
				:min="-90"
				:max="90"
				:placeholder="$t('common.placeholder.longitude')"
			/>
		</b-input-group>
		<b-button variant="light">확인</b-button>
	</b-form-group>
</template>

<script>
export default {
	props: { label: String, placeholder: String, latitude: { type: Number, requried: true }, longitude: { type: Number, requried: true } },
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.install-Location {
	.input-group {
		width: 170px !important;
		float: left;
	}
	.input-group:first-child {
		margin-bottom: 10px;
	}
	button {
		width: 43px;
		height: 68px;
		margin-left: 10px;
	}
}
#detailEquipmentDcu .install-Location {
	height: 70px;
	margin-bottom: 15px !important;
	> div {
		width: 224px;
	}
}
</style>
