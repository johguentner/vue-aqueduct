<template>
	<img alt="Vue logo" src="./assets/logo.png" />

	<VueViaduct name="test" #default="{ data }">
		{{ data }}
	</VueViaduct>
	<!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import VueViaduct from "../../src/VueViaduct.vue";
import Viaduct from "../../src/viaduct";

@Options({
	components: {
		HelloWorld,
		VueViaduct,
	},
})
export default class App extends Vue {
	mounted() {
		Viaduct.instance("test").pour({ test: "test" });
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
