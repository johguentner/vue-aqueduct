import {
	h
} from "vue";

import Aqueduct from './aqueduct';

export default {
	name: "v-aqueduct",
	emits: ['triggered', 'destroyed'],
	props: {
		name: {
			type: String,
			default: '__global__',
		},
		isCollection: Boolean,
		destroyFunction: Function,
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
	methods: {
		destroy(callback) {
			if (this.destroyFunction) this.destroyFunction(callback);
			else callback();
		}
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
					destroy: () => {
						this.$aqueduct(this.name).destroy(dataItem.uid);
						this.$nextTick(() => {
							this.$emit('destroyed');
						});
					},
				}));
			}

			this.$nextTick(() => {
				this.$emit('triggered');
			});

			return h(
				"div", slotArray
			);

		} else {
			if (this.data == {} || this.data == null) {
				return h("div");
			}

			this.$nextTick(() => {
				this.$emit('triggered');
			});

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