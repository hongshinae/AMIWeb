<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>레이아웃</h1>
			<div class="tap-wrap">
				<button type="button" class="btn btn-primary rounded-pill">소제목 1</button>
				<button type="button" class="btn btn-outline-primary rounded-pill">소제목 2</button>
				<button type="button" class="btn btn-outline-primary rounded-pill">소제목 3</button>
			</div>
			<div class="main-location">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<a href="" class="router-link-active" target="_self">
							<svg
								viewBox="0 0 16 16"
								width="1em"
								height="1em"
								focusable="false"
								role="img"
								aria-label="house"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="bi-house b-icon bi"
							>
								<g>
									<path
										fill-rule="evenodd"
										d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
									></path>
									<path
										fill-rule="evenodd"
										d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
									></path>
								</g>
							</svg>
							홈
						</a>
					</li>
					<li class="breadcrumb-item active">
						<span aria-current="location">페이지1</span>
					</li>
					<li class="breadcrumb-item active">
						<span aria-current="location">페이지2</span>
					</li>
				</ol>
			</div>
		</div>
		<div class="search-wrap">
			<div class="wbox">
				<div class="search-img">
					<b-icon icon="search" variant="primary"></b-icon>
				</div>
				<div class="search">
					<form>
						<div class="row">
							<div class="col-sm-12 col-md-12 col-xl-3">
								<div class="row">
									<div class="col-lg-4"><label class="d-block">텍스트</label></div>
									<div class="col-lg-8">
										<select class="custom-select">
											<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
											<option value="1">텍스트1</option>
										</select>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-12 col-xl-3">
								<div class="row">
									<div class="col-lg-4"><label class="d-block">텍스트</label></div>
									<div class="col-lg-8">
										<select disabled="disabled" class="custom-select">
											<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
										</select>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-12 col-xl-3">
								<div class="row">
									<div class="col-lg-4"><label class="d-block">텍스트</label></div>
									<div class="col-lg-8">
										<select disabled="disabled" class="custom-select">
											<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-12 col-xl-3">
								<div class="row">
									<div class="col-lg-4"><label class="d-block">텍스트</label></div>
									<div class="col-lg-8">
										<select class="custom-select">
											<option selected="selected" disabled="disabled" value="">-- 선택하세요 --</option>
											<option value="1">텍스트1</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="btn-wrap ml-auto">
					<button type="button" class="btn btn-primary">버튼</button>
					<button type="button" class="btn btn-blight">버튼</button>
				</div>
			</div>
		</div>
		<div class="row row-wrap">
			<div class="col-sm-12 col-lg-6">
				<div class="wbox">
					<h5 class="tltle">
						<svg
							viewBox="0 0 16 16"
							width="1em"
							height="1em"
							focusable="false"
							role="img"
							aria-label="arrow return right"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi-arrow-return-right b-icon bi"
						>
							<g>
								<path
									fill-rule="evenodd"
									d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
								></path>
							</g>
						</svg>
						<span> 소제목 <i class="p-Color">포인트컬러</i></span>
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light">Reboot</button
							><button type="button" disabled="disabled" class="btn btn-light disabled">재스캔</button
							><button type="button" disabled="disabled" class="btn btn-light disabled">DCU 펌웨어 업그레이드</button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table b-table-selectable b-table-select-single">
								<thead>
									<tr>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup"></tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-lg-6">
				<div class="wbox">
					<h5 class="tltle">
						<svg
							viewBox="0 0 16 16"
							width="1em"
							height="1em"
							focusable="false"
							role="img"
							aria-label="arrow return right"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi-arrow-return-right b-icon bi"
						>
							<g>
								<path
									fill-rule="evenodd"
									d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
								></path>
							</g>
						</svg>
						<span> 소제목 <i class="p-Color">포인트컬러</i></span>
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light">Reboot</button
							><button type="button" disabled="disabled" class="btn btn-light disabled">재스캔</button
							><button type="button" disabled="disabled" class="btn btn-light disabled">DCU 펌웨어 업그레이드</button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table b-table-selectable b-table-select-single">
								<thead>
									<tr>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
										<th><div>TEXT</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup"></tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row row-wrap">
			<div class="col-lg-12 col-xl-4 col">
				<div class="wbox m-b-20">
					<div class="one-row">
						<fieldset class="form-group">
							<legend class="bv-no-focus-ring col-form-label pt-0">TEXT</legend>
							<div>
								<select class="custom-select">
									<option value="1">TEXT</option>
								</select>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="bv-no-focus-ring col-form-label pt-0">TEXT</legend>
							<div>
								<select class="custom-select">
									<option value="1">TEXT</option>
								</select>
							</div>
						</fieldset>
						<fieldset class="form-group">
							<legend class="bv-no-focus-ring col-form-label pt-0">TEXT</legend>
							<div>
								<select class="custom-select">
									<option value="1">TEXT</option>
								</select>
							</div>
						</fieldset>
						<button type="button" class="btn btn-light btn-block">button</button>
					</div>
				</div>
				<div class="wbox">
					<h5 class="tltle">
						<svg
							viewBox="0 0 16 16"
							width="1em"
							height="1em"
							focusable="false"
							role="img"
							aria-label="arrow return right"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi-arrow-return-right b-icon bi"
						>
							<g>
								<path
									fill-rule="evenodd"
									d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
								></path>
							</g>
						</svg>
						<span>:<i class="p-Color">0</i>세대, 검침일 :<i class="p-Color">1</i> 일</span>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table b-table-selectable b-table-select-single">
								<thead>
									<tr>
										<th><div>text</div></th>
										<th><div>text</div></th>
										<th><div>text</div></th>
									</tr>
								</thead>
								<tbody></tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-12 col-xl-8 col">
				<div>
					<div class="btn-filter-wrap"></div>
					<div class="table-wrap ">
						<div class="bgtable"></div>
					</div>
				</div>
			</div>
		</div>
		<div>dcu</div>
		<div>dcu</div>
		<div>dcu</div>
	</div>
</template>
<style lang="scss">
@import "~@/assets/scss/search.scss";
</style>
