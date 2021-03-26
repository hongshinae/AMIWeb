<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>NMS (SNMP)</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>설비</b-breadcrumb-item>
					<b-breadcrumb-item active>NMS (SNMP)</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>
		<div class="search-wrap1">
			<div class="wbox">
				<div class="search-img">
					<b-icon icon="search" variant="primary"></b-icon>
				</div>
				<div class="search">
					<!--검색영역-->
					<form>
						<b-row>
							<b-col cols="4" xl="3">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">지역 이름</label>
									</b-col>
									<b-col lg="8">
										<b-form-select v-model="selected" class="form-control">
											<b-form-select-option>서울시</b-form-select-option>
											<b-form-select-option>경기도</b-form-select-option>
										</b-form-select>
									</b-col>
								</b-row>
							</b-col>
							<b-col cols="4" xl="3">
								<b-row class="form-group">
									<b-col lg="4">
										<label class="d-block">단지 명</label>
									</b-col>
									<b-col lg="8">
										<b-form-input v-model="text" placeholder="그랑시아 아파트" class="form-control"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</form>
					<!--//검색영역-->
				</div>
				<div class="btn-wrap ml-auto">
					<b-button block variant="primary">검색</b-button>
				</div>
			</div>
		</div>
		<b-row>
			<b-col cols="6" lg="6">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>DCU <i class="p-Color">4</i> </span>
						<div role="group" class="btn-group">
							<b-button variant="light">Reboot</b-button>
							<b-button variant="light">재스킨</b-button>
							<b-button variant="light">DCU펌웨어 업그레이드</b-button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table" id="">
								<thead role="rowgroup" class="">
									<tr role="row" class="">
										<th class=""><div></div></th>
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
										<td class=""><b-form-checkbox></b-form-checkbox></td>
										<td class=""><span class="linkage"></span></td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
										<td class="">29140192159</td>
										<td class="">정상</td>
										<td class="">1.0</td>
									</tr>
									<tr role="row" class="">
										<td class=""><b-form-checkbox></b-form-checkbox></td>
										<td class=""><span class="linkage"></span></td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
										<td class="">29140192159</td>
										<td class="">정상</td>
										<td class="">1.0</td>
									</tr>
									<tr role="row" class="">
										<td class=""><b-form-checkbox></b-form-checkbox></td>
										<td class=""><span class="linkage"></span></td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
										<td class="">29140192159</td>
										<td class="">정상</td>
										<td class="">1.0</td>
									</tr>
									<tr role="row" class="">
										<td class=""><b-form-checkbox></b-form-checkbox></td>
										<td class=""><span class="linkage"></span></td>
										<td class="">101동</td>
										<td class="">NS09_0101A</td>
										<td class="">29140192159</td>
										<td class="">정상</td>
										<td class="">1.0</td>
									</tr>
									<tr role="row" class="">
										<td class=""><b-form-checkbox></b-form-checkbox></td>
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
					</div>
				</div>
			</b-col>
			<b-col cols="6" lg="6">
				<div class="wbox">
					<h5 class="tltle">
						<b-icon icon="arrow-return-right"></b-icon>
						<span>Modem <i class="p-Color">4</i> Meter <i class="p-Color">8</i> </span>
						<div role="group" class="btn-group">
							<b-button variant="light">모뎀리셋</b-button>
							<b-button variant="light">모뎀펌웨어 업그레이드</b-button>
						</div>
					</h5>
					<div class="table-wrap">
						<div class="basic-table">
							<table class="table b-table" id="">
								<thead role="rowgroup" class="">
									<tr role="row" class="">
										<th class=""><div>Mac address</div></th>
										<th class=""><div>연동 장비수</div></th>
										<th class=""><div></div></th>
										<th class=""><div>상태코드</div></th>
									</tr>
								</thead>
								<tbody role="rowgroup">
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
									<tr role="row" class="">
										<td class="">00:00:AC:5E:8C:A0:38:63</td>
										<td class="">2</td>
										<td class=""></td>
										<td class="">정상</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
		<div class="btn-only-wrap">
			<div class="btn-wrap">
				<div role="group" class="btn-group">
					<b-button variant="light">SNMP read/write</b-button>
					<b-button variant="light">trap</b-button>
					<b-button variant="light">상태리스트</b-button>
					<b-button variant="light">SNMP / FEP 통신 동작 확인</b-button>
					<b-button variant="light">시간 동기화</b-button>
				</div>
				<div role="group" class="btn-group">
					<b-button variant="light">펌웨어 이미지 관리</b-button>
				</div>
			</div>
		</div>
	</div>
</template>
