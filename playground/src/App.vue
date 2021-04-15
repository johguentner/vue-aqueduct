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
	<button class="p-2 bg-gray-200 rounded" @click="test">show</button>
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
			.pour({
				title: "Modal To Go",
				msg: "What do you think ? 😊",
				buttons: [
					{ content: "Close" },
					{ content: "Approve", variant: "success" },
				],
			})
			.then((e, destroy) => {
				console.log(e);
				if (e == "Close") {
					this.$aqueduct("msg").pour(
						{
							msg: "oh no... 😞 ... I'm closing now",
						},
						1500
					);
				} else {
					this.$aqueduct("msg")
						.pour({
							msg:
								"AWESOME! 🤙 \nsee ya later!\n\n\n\n\n\n\n\n\nsecret: this is a modal",
							buttons: [{ content: "k bye", class: "col-span-2" }],
						})
						.then((e, destroy) => {
							destroy();
						});
				}
			});
		this.counter++;
	}
	mounted() {}
}
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
