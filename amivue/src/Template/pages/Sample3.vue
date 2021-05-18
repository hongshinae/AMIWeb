<template>
	<div>
		<search />
		<div class="row row-wrap">
			<div class="col-sm-12 col-lg-4">
				<div class="wbox m-b-20">
					<div class="one-row">
						<fieldset class="form-group">
							<legend class="col-form-label pt-0">텍스트</legend>
							<div>
								<select disabled="disabled" class="custom-select">
									<option value="1">텍스트1</option>
								</select>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="col-form-label pt-0">텍스트</legend>
							<div>
								<select class="custom-select">
									<option value="1">텍스트1</option>
								</select>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="col-form-label pt-0">텍스트</legend>
							<div>
								<select class="custom-select">
									<option value="1">텍스트1</option>
								</select>
							</div>
						</fieldset>
						<b-button block variant="light">지긋</b-button>
					</div>
				</div>
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span> 타이틀 <i class="p-Color">내용</i> </span>
						<button-group />
					</h5>
					<table-white />
				</div>
			</div>
			<div class="col-sm-12 col-lg-8">
				<content-table />
			</div>
		</div>
	</div>
</template>

<script>
import Search from "@/Template/components/Search";
import ButtonGroup from "@/Template/components/ButtonGroup";
import TableWhite from "@/Template/components/TableWhite";
import ContentTable from "@/Template/components/ContentTable";

export default {
	components: { Search, ButtonGroup, TableWhite, ContentTable }
};
</script>

<style lang="scss">
@import "~@/assets/scss/pages/mapping.scss";
</style>
