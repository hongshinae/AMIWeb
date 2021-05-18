<template>
	<div class="main-bg content">
		<main-title />
		<search />
		<filter-wrap />
		<h5>4. 기본 테이블</h5>
		<table-basic />
		<h5>5. 내용이 없는 테이블</h5>
		<table-empty />
		<h5>6. 화이트 테이블</h5>
		<table-white />
		<h5>7. 페이지네이션</h5>
		<pagination />
		<h5>8. 그룹버튼 디자인</h5>
		<div class="btn-only-wrap">
			<div class="btn-wrap">
				<button-group />
				<button-group />
			</div>
		</div>
		<h5>8. 버튼 디자인</h5>
		<buttons />
		<h5>9. 폰트컬러</h5>
		<text />
		<h5>9. 원</h5>
		<div>
			<span class="normal"></span>
			<span class="linkage"></span>
			<span class="unlinkage"></span>
		</div>
		<button />
		<texts />
	</div>
</template>
<script>
import MainTitle from "@/Template/components/MainTitle";
import Search from "@/Template/components/Search";
import Buttons from "@/Template/components/Button";
import ButtonGroup from "@/Template/components/ButtonGroup";
import FilterWrap from "@/Template/components/FilterWrap";
import Pagination from "@/Template/components/Pagination";
import TableBasic from "@/Template/components/TableBasic";
import TableEmpty from "@/Template/components/TableEmpty";
import TableWhite from "@/Template/components/TableWhite";
import Texts from "@/Template/components/Text";

export default {
	components: { MainTitle, Search, Buttons, ButtonGroup, FilterWrap, Pagination, TableBasic, TableEmpty, TableWhite, Texts }
};
</script>
