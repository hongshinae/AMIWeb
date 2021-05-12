<template>
	<div class="main-bg content">
		<h5>1. 메인 타이틀</h5>
		<div class="main-location-wrap">
			<h1>기본 페이지</h1>
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
		<h5>2. 검색 영역</h5>
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
		<h5>3. 왼쪽버튼, 필터 영역</h5>
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
				<div class="filter-wrap">
					<fieldset class="form-group">
						<div>
							<fieldset class="form-group">
								<legend class="bv-no-focus-ring col-form-label pt-0">동명</legend>
								<div>
									<input type="text" placeholder="101동" class="form-control" />
								</div>
							</fieldset>
						</div>
					</fieldset>
					<fieldset class="form-group">
						<div>
							<select class="custom-select">
								<option value="10">10개씩 보기</option>
								<option value="15">15개씩 보기</option>
								<option value="20">20개씩 보기</option>
								<option value="30">30개씩 보기</option>
								<option value="50">50개씩 보기</option>
							</select>
						</div>
					</fieldset>
				</div>
			</div>
			<h5>4. 기본 테이블</h5>
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
							<tr>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
							</tr>
							<tr>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
							</tr>
							<tr>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<h5>5. 내용이 없는 테이블</h5>
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
			<h5>6. 화이트 테이블</h5>
			<div class="table-wrap">
				<div class="basic-table">
					<table role="table" class="table b-table">
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
							<tr>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
							</tr>
							<tr>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
							</tr>
							<tr>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
								<td><div>text</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<h5>7. 페이지네이션</h5>
			<div class="pa-wrap">
				<ul class="pagination b-pagination">
					<li class="page-item disabled">
						<span class="page-link"><span class="text-success">«</span></span>
					</li>
					<li class="page-item disabled">
						<span class="page-link"><span class="text-danger">‹</span></span>
					</li>
					<li role="presentation" class="page-item active">
						<button type="button" class="page-link">
							1
						</button>
					</li>
					<li class="page-item disabled">
						<span class="page-link"><span class="text-warning">›</span></span>
					</li>
					<li class="page-item disabled">
						<span class="page-link"><span class="text-info">»</span></span>
					</li>
				</ul>
			</div>
			<h5>8. 그룹버튼 디자인</h5>
			<div class="btn-only-wrap">
				<div class="btn-wrap">
					<div role="group" class="btn-group">
						<button type="button" class="btn btn-light">button1</button>
						<button type="button" class="btn btn-light">button2</button>
						<button type="button" class="btn btn-light">button3</button>
					</div>
					<div role="group" class="btn-group">
						<button type="button" class="btn btn-light">button4</button>
					</div>
				</div>
			</div>
			<h5>8. 버튼 디자인</h5>
			<div>
				<button type="button" class="btn btn-light">button1</button>
				<button type="button" class="btn btn-blight">button2</button>
				<button type="button" class="btn btn-primary">button3</button>
				<button type="button" disabled="disabled" class="btn btn-light disabled">button4</button>`
			</div>
			<h5>9. 폰트컬러</h5>
			<div>
				<p class="p-Color">text입니다.</p>
				<p class="r-color">text입니다.</p>
				<p class="fontC">text입니다.</p>
				<p class="r-color">text입니다.</p>
				<p class="r-color">text입니다.</p>
			</div>
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
	</div>
</template>
<style lang="scss">
@import "~@/assets/scss/search.scss";
</style>
