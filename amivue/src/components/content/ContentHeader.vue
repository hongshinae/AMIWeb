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
