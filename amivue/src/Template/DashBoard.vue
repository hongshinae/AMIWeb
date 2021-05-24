<template>
	<div class="">
		<div class="row row-wrap">
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
				<total-voltage />
			</div>
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4"></div>
			<div class="col-sm-12 col-md-12 col-lg-6 col-xl-4"></div>
		</div>
	</div>
</template>
<script>
import TotalVoltage from "@/Template/chart/TotalVoltage";
export default {
	components: {
		TotalVoltage
	}
};
</script>
