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
					<span>{{ data.dcuOperationCount }}</span>
					<span class="r-color">{{ data.dcuErrorCount }}</span>
				</li>
				<li>
					<span>Meter</span>
					<span>{{ data.meterOperationCount }}</span>
					<span class="r-color">{{ data.meterErrorCount }}</span>
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

<style></style>
