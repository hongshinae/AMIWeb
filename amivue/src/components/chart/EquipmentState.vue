<template>
	<div class="high-map-wrap">
		<div class="high-map"></div>
		<div class="high-table">
			<ul>
				<li>
					<span>설비</span>
					<span>설치 수</span>
					<span>장애 수</span>
				</li>
				<li>
					<span>DCU</span>
					<span>{{ data ? data.dcuOperationCount : 0 }}</span>
					<span class="r-color">{{ data ? data.dcuErrorCount : 0 }}</span>
				</li>
				<li>
					<span>Meter</span>
					<span>{{ data ? data.meterOperationCount : 0 }}</span>
					<span class="r-color">{{ data ? data.meterErrorCount : 0 }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ["data"]
};
</script>

<style lang="scss" scope>
@import "~@/assets/scss/chart/EquipmentState.scss";
</style>
