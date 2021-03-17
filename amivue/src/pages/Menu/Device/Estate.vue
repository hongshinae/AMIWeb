<template>
	<div class="main-bg">
		<!-- <icon-base viewBox="0 0 16 16" width="1.2em" height="1.2em" icon-color="" icon-name="search" cls="bi-search mx-auto b-icon bi">
			<icon-search />
		</icon-base> -->
		<b-modal id="addEstate" size="lg" title="First Modal" ok-only no-stacking>
			<p class="my-2">First Modal</p>
			<b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
		</b-modal>
		<content-header />
		<content-search>
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
		</content-search>
		<content-table>
			<template v-slot:header-left-icon>
				<icon-pencil />
			</template>
			<template v-slot:header-left-name>
				{{ $t("estate.add") }}
			</template>
			<template v-slot:header-right-icon>
				<polyline clip-rule="evenodd" fill="#08743B" fill-rule="evenodd" points="30,28.652 0,28.652 0,0 30,0 30,28.652  " />
				<polyline
					fill="#FFFFFF"
					points="23.211,21.771 18.186,21.771 14.756,16.922 11.154,21.771 6.11,21.771 12.371,13.895 7.313,7.007    12.413,7.007 14.781,10.752 17.302,7.007 22.488,7.007 17.189,13.895 23.211,21.771  "
				/>
			</template>
			<template v-slot:header-right-name>
				{{ $t("estate.excelDownload") }}
			</template>
		</content-table>
	</div>
</template>
<script>
import Vue from "vue";
import ContentHeader from "@/components/content/ContentHeader";
import ContentSearch from "@/components/content/ContentSearch";
import ContentTable from "@/components/content/ContentTable";

import IconSearch from "@/components/icons/IconSearch";
import IconHomeUp from "@/components/icons/IconHomeUp";
import IconHomeDown from "@/components/icons/IconHomeDown";
import IconPencil from "@/components/icons/IconPencil";

Vue.component(ContentHeader);
Vue.component(ContentSearch);
Vue.component(ContentTable);
Vue.component("icon-search", IconSearch);
Vue.component("icon-home-up", IconHomeUp);
Vue.component("icon-home-down", IconHomeDown);
Vue.component("icon-pencil", IconPencil);

export default {
	components: { ContentHeader, ContentSearch, ContentTable },
	data: () => {
		return {};
	},
	methods: {}
};
</script>
