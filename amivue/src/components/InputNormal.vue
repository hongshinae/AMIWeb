<template>
	<b-form-group :label="label" label-for="">
		<b-input-group>
			<b-form-input :value="value" @input="$emit('input', $event)" :placeholder="placeholder" :disabled="disabled"></b-form-input>
			<b-input-group-append v-if="button">
				<b-button variant="light" @click="$emit('handle:action', value)">{{ button }}</b-button>
			</b-input-group-append>
		</b-input-group>
	</b-form-group>
</template>

<script>
export default {
	props: ["label", "placeholder", "value", "disabled", "button"]
};
</script>
