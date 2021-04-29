<template>
	<b-col class="dcu-modem" xl="2" lg="2" sm="3">
		<b-overlay id="overlay-background" :show="false" variant="light" opacity="0.85" blur="2px" rounded="sm">
			<div class="wbox">
				<ul class="stats-wrap">
					<li><span :class="{ linkage: item.dcuPingCode == 0, unlinkage: item.dcuPingCode == 1 }"></span>DCU</li>
					<li><span :class="{ linkage: item.routerPingCode == 0, unlinkage: item.routerPingCode == 1 }"></span>Router</li>
				</ul>
				<p class="dcu-name">{{ item.dcuId }}</p>
				<ul class="dcu-button-wrap">
					<li><b-button block variant="dark" @click="$emit('handle:dcuPing', item)">DCU ping</b-button></li>
					<li><b-button block variant="dark" @click="$emit('handle:routerPing', item)">Router ping</b-button></li>
				</ul>
			</div>
		</b-overlay>
	</b-col>
</template>

<script>
export default {
	props: ["item"]
};
</script>

<style lang="scss"></style>
