<template>
	<div class="main-location-wrap">
		<h1>{{ pageName }}</h1>
		<slot />
		<div class="main-location">
			<b-breadcrumb>
				<b-breadcrumb-item :to="path.link" v-for="(path, i) in paths" :key="i" :active="isActive(path)">
					<b-icon :icon="path.bicon" v-if="path.bicon" />
					{{ path.name }}
				</b-breadcrumb-item>
			</b-breadcrumb>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		pageName: {
			type: String,
			required: true
		},
		paths: {
			type: Array,
			required: true
		}
	},
	created() {},
	methods: {
		isActive: function(path) {
			if (path.link) {
				return false;
			} else {
				return true;
			}
		}
	},
	data() {
		return {};
	}
};
</script>

<style scss="lang">
.main-location-wrap {
	width: 100%;
	position: relative;
	display: block;
	margin: 22px 0 15px 0 !important;
	padding: 0 8px;
	margin-bottom: 50px;
	h1 {
		font-size: 24px;
		float: left;
		height: 60px;
		line-height: 60px;
		margin-right: 20px;
		vertical-align: bottom;
		font-weight: 600;
		color: #fff;
	}
	.tap-wrap {
		display: inline-block;
		margin-top: 16px;
		button {
			margin-right: 10px;
		}
	}
}
.main-location-wrap::after {
	clear: both;
	display: block;
	content: "";
	height: 0;
	overflow: hidden;
	visibility: hidden;
}
.theme_white .main-location-wrap h1 {
	color: #212738;
}

.main-location {
	float: right;
	height: 24px;
	font-size: 12px;
	margin-top: 20px;
	.breadcrumb {
		float: left;
		background-color: inherit !important;
		padding: 0;
		margin-bottom: 0;
	}
	.breadcrumb-item {
		svg {
			margin-right: 5px;
		}
		a {
			color: #777777 !important;
		}
		a:hover {
			text-decoration: none;
			color: $color-bl;
		}
	}
}
</style>
