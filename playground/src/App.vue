<template>
	<img alt="Vue logo" src="./assets/logo.png" />

	<VAqueduct name="message" #default="{ testing, bla, visible }">
		<div v-if="visible">
			{{ testing }} <br />
			{{ bla }}
		</div>
	</VAqueduct>

	<button @click="$aqueduct('message').pour({ visible: true })">show</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import VAqueduct from "../../src/vAqueduct";
import Aqueduct from "../../src/aqueduct";

@Options({
	components: {
		HelloWorld,
		VAqueduct,
	},
})
export default class App extends Vue {
	mounted() {
		this.$aqueduct("message").flood({ testing: "test", bla: "tesingtesting" });
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
