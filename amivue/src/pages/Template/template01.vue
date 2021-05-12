<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>기본 레이아웃</h1>
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
		<div class="table-wrap">
			<div class="bgtable">
				<table role="table" class="table b-table table-striped">
					<thead role="rowgroup">
						<tr>
							<th><div>text</div></th>
							<th><div>text</div></th>
							<th><div>text</div></th>
							<th><div>text</div></th>
							<th><div>text</div></th>
						</tr>
					</thead>
					<tbody>
						<tr class="b-table-empty-row">
							<td colspan="5">
								<div>
									<div class="blank-box">
										<span>
											<img src="/img/monitor_empty.b22e08f5.svg" /><svg
												viewBox="0 0 16 16"
												width="1em"
												height="1em"
												focusable="false"
												role="img"
												aria-label="three dots"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												class="bi-three-dots b-icon bi b-icon-animation-cylon"
												style="font-size: 200%;"
											>
												<g>
													<path
														d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
													></path>
												</g>
											</svg>
										</span>
										<p>검색결과가 없습니다. 검색을 먼저 진행해주세요.</p>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
//
<style lang="scss">
// @import "~@/assets/scss/search.scss";
//
</style>
