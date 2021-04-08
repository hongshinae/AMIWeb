<template>
	<b-form-group :label="$t('component.content.region')">
		<b-form-select
			text-field="regionName"
			value-field="regionSeq"
			:value="selected"
			:options="regionList"
			@input="$emit('input', $event)"
			@change="$emit('init-filter-text')"
		>
			<template #first>
				<b-form-select-option value="0" selected>-- 전체 --</b-form-select-option>
			</template>
		</b-form-select>
	</b-form-group>
</template>

<script>
import Search from "@/service/search";

export default {
	props: ["selected"],
	mounted() {
		Search.region()
			.then(({ data }) => {
				this.regionList = data.response;
			})
			.catch(error => {
				console.log(error);
			});
	},
	data() {
		return {
			regionList: []
		};
	}
};
</script>

<style></style>
