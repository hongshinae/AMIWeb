<template>
	<div class="main-bg content">
		<div class="main-location-wrap">
			<h1>Q&A</h1>
			<div class="main-location">
				<b-breadcrumb>
					<b-breadcrumb-item to="/dashboard">
						<b-icon icon="house" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
						홈
					</b-breadcrumb-item>
					<b-breadcrumb-item>고객지원</b-breadcrumb-item>
					<b-breadcrumb-item active>Q&A</b-breadcrumb-item>
				</b-breadcrumb>
			</div>
		</div>

		<div class="table-wrap">
			<div>
				<div>
					<b-button block v-b-toggle.my-collapse01>1. kdkd</b-button>
				</div>

				<b-collapse id="my-collapse01">
					1. 내용
				</b-collapse>
			</div>
			<div>
				<div>
					<b-button block v-b-toggle.my-collapse02>2.</b-button>
				</div>

				<b-collapse id="my-collapse02">
					1. 내용
				</b-collapse>
			</div>
		</div>
		<div>
			<b-button v-b-toggle:my-collapse> <span class="when-open">Close</span><span class="when-closed">Open</span> My Collapse </b-button>
			<b-collapse id="my-collapse">
				<!-- Content here -->
				fff
			</b-collapse>
		</div>
		<div>
			<b-button v-b-toggle:my-collapse> <span class="when-open">Close</span><span class="when-closed">Open</span> My Collapse </b-button>
			<b-collapse id="my-collapse">
				<!-- Content here -->
				fff
			</b-collapse>
		</div>
	</div>
</template>
<script></script>
<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
	display: none;
}
</style>
