<template>
	<slot :data="data"></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		name: String,
	},
	data() {
		return {
			data: null,
		};
	},
	mounted() {
		if (this.name) {
			this.$viaduct.initialize(this.name, this);
		}
	},
});
</script>

<style>
</style>