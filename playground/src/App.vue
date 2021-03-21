<template>
	<img alt="Vue logo" src="./assets/logo.png" />

	<!-- <VAqueduct #default="{ testing, bla, visible, callback }">
		first
		<div v-if="visible">

		</div>
	</VAqueduct>
	<br />
	<VAqueduct #default="{ testing, bla, visible, callback }">
		second
		<div v-if="visible">
			{{ testing }} <br />
			{{ bla }}
			<button @click="callback">back</button>
		</div>
	</VAqueduct> -->

	<VAqueduct #default="{ msg }">
		<div v-for="m in msg">
			{{m}}
		</div>
	</VAqueduct>

	<button @click="test">
		show
	</button>
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
	
	test(){
		this.$aqueduct().flood({ msg: ['test'] }, 1000);
	}

	mounted() {
		// this.$aqueduct()
		// 	.flood({ testing: "test", bla: "tesingtesting" })
		// 	.then((test) => {
		// 		this.$aqueduct().flood();
		// 	});
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
