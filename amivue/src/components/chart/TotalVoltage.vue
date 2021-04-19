<template>
	<div class="box power">
		<h5>
			<span>{{ $t("dashboard.totalVoltage") }}</span>
			<b class="fontC">45.452kWh</b>
		</h5>
		<div class="chartWarp">
			<div class="">
				<high-charts :options="chartOptions" />
			</div>
		</div>
	</div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
	components: {
		HighCharts: Chart
	},
	data() {
		return {
			chartOptions: {
				series: [
					{
						data: [1, 2, 3] // sample data
					}
				]
			}
		};
	}
};
</script>

<style></style>
