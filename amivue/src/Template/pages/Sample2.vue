<template>
	<div>
		<search />
		<div class="row row-wrap">
			<div class="col-sm-12 col-lg-6">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span> 타이틀 <i class="p-Color">내용</i> </span>
						<button-group />
					</h5>
					<table-white />
				</div>
			</div>
			<div class="col-sm-12 col-lg-6">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span> 타이틀 <i class="p-Color">내용</i> </span>
						<button-group />
					</h5>
					<table-white />
				</div>
			</div>
			<div class="btn-only-wrap">
				<div class="btn-wrap">
					<button-group />
					<button-group />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Search from "@/Template/components/Search";
import ButtonGroup from "@/Template/components/ButtonGroup";
import TableWhite from "@/Template/components/TableWhite";

export default {
	components: { Search, ButtonGroup, TableWhite }
};
</script>

ButtonGroup<style></style>
