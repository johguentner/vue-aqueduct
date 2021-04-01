import {
	h
} from "vue";

import Aqueduct from './aqueduct';

export default {
	name: "v-aqueduct",
	props: {
		name: {
			type: String,
			default: '__global__',
		},
		isCollection: Boolean,
	},
	data() {
		return {
			data: null,
			callback: null,
			uid: null,
		};
	},
	created() {
		Aqueduct.initialize(this.name, this);
	},
	render() {
		if (this.isCollection && Array.isArray(this.data)) {
			let slotArray = [];

			for (let dataItem of this.data) {
				slotArray.push(this.$slots.default({
					...dataItem,
					callback: (e) => {
						this.callback(e, () => this.$aqueduct(this.name).destroy(dataItem.uid));
					},
					destroy: () => this.$aqueduct(this.name).destroy(dataItem.uid),
				}));
			}

			return h(
				"div", slotArray
			);

		} else {
			if (this.data == {} || this.data == null) {
				return h("div");
			}

			return h(
				"div",
				this.$slots.default({
					...this.data,
					callback: (e) => {
						this.callback(e, () => this.$aqueduct(this.name).destroy());
					},
					destroy: () => this.$aqueduct(this.name).destroy(),
				}),
			);
		}
	}
};