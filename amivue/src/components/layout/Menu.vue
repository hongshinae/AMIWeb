<template>
	<b-sidebar id="sidebar-1" title="" shadow>
		<b-nav id="sidebar" class="sidebar" tabs justified vertical>
			<router-link class="logoWrap" to="/dashboard"></router-link>
			<menu-sub-slot :uri="menu">
				<template v-slot:link :to="equipmentManagement"> </template>
			</menu-sub-slot>
			<ul class="sidebarNav">
				<li class="on">
					<a class="facilities"><i></i><span>설비</span></a>
					<ul class="subNav">
						<router-link tag="li" to="/estate"><a>단지관리</a></router-link>
						<router-link tag="li" to="/building"><a>동관리</a></router-link>
						<router-link tag="li" to="/equipment"><a>장비관리</a></router-link>
						<router-link tag="li" to="/mapping"><a>매핑관리</a></router-link>
						<router-link tag="li" to="/network"><a>네트워크현황</a></router-link>
						<router-link tag="li" to="/nms"><a>NMS</a></router-link>
						<router-link tag="li" to="/server"><a>서버현황</a></router-link>
					</ul>
				</li>
				<li class="on">
					<a class="read"><i></i><span>검침</span></a>
					<ul class="subNav">
						<router-link tag="li" to="/metering"><a>test</a></router-link>
						<router-link tag="li" to="/meteringStatus"><a>검침 현황</a></router-link>
						<router-link tag="li" to="/meteringInquiry"><a>검침 조회</a></router-link>
						<router-link tag="li" to="/meteringInformation"><a>검침 정보</a></router-link>
						<router-link tag="li" to="/monthMetering"><a>월 검침</a></router-link>
					</ul>
				</li>
				<li class="on">
					<a class="error"><i></i><span>장애</span></a>
					<ul class="subNav">
						<router-link tag="li" to="/disabilityStatus"><a>장애 현황</a></router-link>
						<router-link tag="li" to="/disabilityStatusCode"><a>장애/상태코드</a></router-link>
						<router-link tag="li" to="/networkStatus"><a>네트워크 상태</a></router-link>
						<router-link tag="li" to="/unMeteringInformation"><a>미검침 정보</a></router-link>
					</ul>
				</li>
				<li class="on">
					<a class="customer"><i></i><span>고객 지원</span></a>
					<ul class="subNav">
						<router-link tag="li" to="/board"><a>문의 게시판</a></router-link>
						<router-link tag="li" to="/qa"><a>QA</a></router-link>
					</ul>
				</li>
			</ul>
		</b-nav>
	</b-sidebar>
</template>

<script>
// Menu css
import "@/assets/css/menu.css";
import MenuSubSlot from "@/components/MenuSubSlot";
export default {
	name: "Menu",
	components: {
		MenuSubSlot
	},
	data() {
		return {
			menu: {
				complexManagement: {
					name: "",
					uri: ""
				}
			}
		};
	}
};
</script>

<style></style>
