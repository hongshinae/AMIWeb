<template>
	<transition name="fade" mode="out-in">
		<router-view class="content"></router-view>
	</transition>
</template>

<script>
// Main css
import "@/assets/css/contents.scss";
import "@/assets/css/modal_wh.scss";
import "@/assets/css/table.scss";
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}

/* .fade-leave-active in <2.1.8 */
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
