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
	<br />
	<br />
	<button class="rounded bg-gray-200 p-2" @click="test">show</button>

	<Messager> </Messager>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Messager from "../../src/Messager.vue";
import VAqueduct from "../../src/vAqueduct";
import Aqueduct from "../../src/aqueduct";

@Options({
	components: {
		HelloWorld,
		VAqueduct,
		Messager,
	},
})
export default class App extends Vue {
	counter = 0;

	test() {
		this.$aqueduct("msg")
			.flood(
				{
					msg: "test" + this.counter,
					test: "bla" + this.counter,
				}
			)
			.then((e, destroy) => {
				console.log(e);
				destroy();
			});
		this.counter++;
	}
	mounted() {}
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
