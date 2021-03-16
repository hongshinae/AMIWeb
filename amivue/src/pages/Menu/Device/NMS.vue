<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>NMS (SNMP)</h1>
			<div class="main-location">
				<div class="home-img">
					<svg
						viewBox="0 0 16 16"
						width="1.2em"
						height="1.2em"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="bi-house mx-auto b-icon bi"
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
				</div>
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#" target="_self" class="">홈</a></li>
					<li class="breadcrumb-item"><a href="#" target="_self" class="">설비</a></li>
					<li class="breadcrumb-item active"><span aria-current="location">NMS (SNMP)</span></li>
				</ol>
			</div>
		</div>
		<div class="search-wrap1">
			<div class="wbox">
				<div class="search-img">
					<svg viewBox="0 0 16 16" width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" class="bi-search mx-auto b-icon bi">
						<g data-v-41be6633="">
							<path
								d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
							></path>
						</g>
					</svg>
				</div>
				<div class="search">
					<!--검색영역-->
					<form>
						<div class="row">
							<div class="col-lg-4">
								<div class="form-group row">
									<label class="d-block col-lg-4">지역</label>
									<div class="col-lg-8">
										<select class="form-control">
											<option value="서울">서울</option>
											<option value="경기">경기</option>
										</select>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div id="" role="group" class="form-group row">
									<label id="" for="input-3" class="d-block col-lg-4">단지 명</label>
									<div class="col-lg-8">
										<input id="input-1" type="text" placeholder="삼성 아파트" class="form-control" />
									</div>
								</div>
							</div>
						</div>
					</form>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<button type="button" class="btn btn-primary btn-block">검 색</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6">
				<div class="wbox">
					<h5 class="tltle">
						<i class="icon-arroew"></i>
						<span>DCU <i class="p-Color">4</i> </span>
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light">Reboot</button>
							<button type="button" class="btn btn-light">재스킨</button>
							<button type="button" class="btn btn-light">DCU펌웨어 업그레이드</button>
						</div>
					</h5>
					<div class="table-wrap">
						<table class="table b-table basic-table" id="">
							<thead role="rowgroup" class="">
								<tr role="row" class="">
									<th class=""><div>동 명</div></th>
									<th class=""><div></div></th>
									<th class=""><div>동 명</div></th>
									<th class=""><div>DCU ID</div></th>
									<th class=""><div>IP</div></th>
									<th class=""><div>상태 코드</div></th>
									<th class=""><div>펌 웨어</div></th>
								</tr>
							</thead>
							<tbody role="rowgroup">
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="error">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="error">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="error">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btn-Wrap">
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light">SNMP read/write</button>
							<button type="button" class="btn btn-light">trap</button>
							<button type="button" class="btn btn-light">상태리스트</button>
							<button type="button" class="btn btn-light">SNMP read/write</button>
							<button type="button" class="btn btn-light">SNMP / FEP 통신 동작 확인</button>
							<button type="button" class="btn btn-light">시간 동기화</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="wbox">
					<h5 class="tltle">
						<i class="icon-arroew"></i>
						<span>Modem <i class="p-Color">4</i> Meter <i class="p-Color">8</i> </span>
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light">모뎀리셋</button>
							<button type="button" class="btn btn-light">모뎀펌웨어 업그레이드</button>
						</div>
					</h5>
					<div class="table-wrap">
						<table class="table b-table basic-table" id="">
							<thead role="rowgroup" class="">
								<tr role="row" class="">
									<th class=""><div>동 명</div></th>
									<th class=""><div></div></th>
									<th class=""><div>동 명</div></th>
									<th class=""><div>DCU ID</div></th>
									<th class=""><div>IP</div></th>
									<th class=""><div>상태 코드</div></th>
									<th class=""><div>펌 웨어</div></th>
								</tr>
							</thead>
							<tbody role="rowgroup">
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="error">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
								<tr role="row" class="">
									<td class=""><input type="checkbox" class="custom-control-input" /></td>
									<td class=""><span class="linkage"></span></td>
									<td class="">101동</td>
									<td class="">NS09_0101A</td>
									<td class="">29140192159</td>
									<td class="">정상</td>
									<td class="">1.0</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btn-Wrap">
						<div role="group" class="btn-group">
							<button type="button" class="btn btn-light">펌웨어 이미지 관리</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
