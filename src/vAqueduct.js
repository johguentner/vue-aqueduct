import {
	h
} from "vue";

import Aqueduct from './aqueduct';

export default {
	name: "v-aqueduct",
	props: {
		name: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			data: null,
		};
	},
	created() {
		//TODO:refine hot-reloading
		//   if (module.hot) {
		// 	module.hot.accept();

		// 	var vueComponent = this;

		// 	module.hot.addStatusHandler(status => {
		// 	  if (status === "apply") {
		// 		vueComponent.$forceUpdate();
		// 	  }
		// 	});
		//   }
		if (this.name) {
			Aqueduct.initialize(this.name, this);
		}
	},
	render() {
		return h(
			"div",
			this.$slots.default({
				...this.data
			}),
		);
	}
};