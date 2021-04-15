<template>
	<b-form-group :label="label" label-for="" class="install-Location">
		<b-input-group :prepend="$t('common.placeholder.latitude')">
			<b-form-input
				type="number"
				:value="location.latitude"
				@input="$emit('input', location)"
				:min="-90"
				:max="90"
				:placeholder="$t('common.placeholder.latitude')"
			/>
		</b-input-group>
		<b-input-group :prepend="$t('common.placeholder.longitude')">
			<b-form-input
				type="number"
				:value="location.longitude"
				@input="$emit('input', location)"
				:min="-90"
				:max="90"
				:placeholder="$t('common.placeholder.longitude')"
			/>
		</b-input-group>
	</b-form-group>
</template>

<script>
export default {
	props: ["label", "placeholder", "value", "latitude", "longitude"],
	data() {
		return {
			location: {
				latitude: null,
				longitude: null
			}
		};
	}
};
</script>

<style lang="scss">
.install-Location {
	.input-group {
		margin-bottom: 5px;
	}
}
</style>
