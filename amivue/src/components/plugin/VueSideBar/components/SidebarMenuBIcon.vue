<template>
	<component
		:is="icon.element ? icon.element : 'b-icon'"
		class="vsm--icon"
		:icon="typeof icon === 'string' || icon instanceof String ? icon : icon.class"
		v-bind="icon.attributes"
	>
		{{ icon.text }}
	</component>
</template>

<script>
export default {
	name: "SidebarMenuBIcon",
	props: {
		icon: {
			type: [String, Object],
			default: ""
		}
	}
};
</script>
