<template>
	<b-row>
		<b-col lg="4">
			<label class="d-block">{{ $t("component.content.region") }}</label>
		</b-col>
		<b-col lg="8">
			<b-form-select :value="selected" @input="$emit('input', $event)" :options="regionList" text-field="regionName" value-field="regionSeq">
				<template #first>
					<b-form-select-option value="0" selected>-- 전체 --</b-form-select-option>
				</template>
			</b-form-select>
		</b-col>
	</b-row>
</template>

<script>
import Estate from "@/service/estate";

export default {
	props: ["selected"],
	mounted() {
		Estate.region()
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
