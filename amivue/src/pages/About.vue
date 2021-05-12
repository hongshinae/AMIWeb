<template>
	<div class="main-bg content">
		<main-title />
		<search />
		<div>
			<div class="btn-filter-wrap">
				<div class="btn-wrap">
					<button type="button" class="btn btn-light">
						<svg
							viewBox="0 0 16 16"
							width="1em"
							height="1em"
							focusable="false"
							role="img"
							aria-label="pencil fill"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi-pencil-fill b-icon bi"
						>
							<g>
								<path
									d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
								></path>
							</g>
						</svg>
						등록
					</button>
					<div role="group" class="btn-group">
						<button type="button" class="btn btn-light btn-excel">
							<img src="@/assets/svg/excel.svg" />
							엑셀 다운로드
						</button>
					</div>
				</div>
				<filter />
			</div>
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
			<button />
			<h5>9. 폰트컬러</h5>
			<text />
			<h5>9. 원</h5>
			<div>
				<span class="normal"></span>
				<span class="linkage"></span>
				<span class="unlinkage"></span>
				<p>text입니다.</p>
				<p>text입니다.</p>
				<p>text입니다.</p>
				<p>text입니다.</p>
			</div>
		</div>
		<button />

		<text />
	</div>
</template>
<script>
import MainTitle from "@/pages/Template/MainTitle";
import Search from "@/pages/Template/Search";
import Button from "@/pages/Template/Button";
import ButtonGroup from "@/pages/Template/ButtonGroup";
import Filter from "@/pages/Template/Filter";
import Pagination from "@/pages/Template/Pagination";
import TableBasic from "@/pages/Template/TableBasic";
import TableEmpty from "@/pages/Template/TableEmpty";
import TableWhite from "@/pages/Template/TableWhite";
import Text from "@/pages/Template/Text";

export default {
	components: { MainTitle, Search, Button, ButtonGroup, Filter, Pagination, TableBasic, TableEmpty, TableWhite, Text }
};
</script>

ButtonGroup
