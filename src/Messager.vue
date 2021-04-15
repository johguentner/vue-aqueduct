<template>
	<VAqueduct
		name="msg"
		#default="{
			msg,
			counter,
			callback,
			destroy,
			_created,
			buttons,
			title,
			position,
		}"
		:destroyFunction="destroy"
		@triggered="visible = true"
	>
		<div
			class="box-border fixed top-0 left-0 block w-full h-full pr-1 leading-5 text-gray-800"
			tabindex="-1"
			role="dialog"
			style="
				transition: opacity 0.15s linear 0s;
				z-index: 1060;
				overflow: hidden auto;
				outline: 0px;
			"
		>
			<transition
				enter-active-class="duration-300 ease-out"
				enter-from-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="duration-500 ease-in"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0"
				v-on:after-leave="destroyCallback()"
			>
				<div v-show="visible" class="absolute z-0 w-full h-full">
					<div class="absolute z-0 w-full h-full bg-gray-600 opacity-40"></div>
				</div>
			</transition>

			<div
				class="box-border relative z-10 flex items-center w-auto max-w-lg m-2 mx-auto overflow-hidden leading-5 duration-500 pointer-events-none transform-none"
				style="min-height: calc(100% - 1rem)"
			>
				<transition
					enter-active-class="duration-300 ease-out"
					enter-from-class="scale-75 -translate-y-2 opacity-0"
					enter-to-class="translate-y-0 opacity-100 sm:scale-100"
					leave-active-class="duration-200 ease-in"
					leave-from-class="translate-y-0 opacity-100 sm:scale-100"
					leave-to-class="translate-y-10 opacity-0 sm:scale-95"
				>
					<div
						v-if="visible"
						class="box-border relative flex flex-col w-full overflow-hidden leading-5 transform bg-white border border-transparent border-solid rounded-sm shadow-xl pointer-events-auto bg-clip-padding"
					>
						<div
							class="box-border flex items-center justify-between flex-shrink-0 py-4 pl-6 pr-12 leading-5 text-gray-800 bg-white border-b border-gray-100 border-solid"
						>
							<h5 class="text-sm font-bold">
								<transition
									mode="out-in"
									enter-active-class="duration-300 ease-out"
									enter-from-class="scale-75 translate-x-3 opacity-0"
									enter-to-class="translate-x-0 opacity-100 sm:scale-100"
									leave-active-class="duration-300 ease-in"
									leave-from-class="translate-x-0 opacity-100 sm:scale-100"
									leave-to-class="-translate-x-3 opacity-0 sm:scale-95"
									@beforeLeave="beforeLeave"
									@enter="enter"
									@afterEnter="afterEnter"
								>
									<div class="whitespace-pre-wrap transform" :key="title">
										{{ title }}
									</div>
								</transition>
							</h5>
							<button
								type="button"
								class="box-content absolute top-0 right-0 z-10 w-5 h-5 m-0 mt-4 mr-4 text-center text-gray-400 normal-case duration-200 border-0 cursor-pointer rounded-xl focus:outline-none hover:text-gray-700 focus: hover:opacity-75 hover:no-underline focus:opacity-100 focus:shadow-xs"
								data-bs-dismiss="modal"
								aria-label="Close"
								@click="visible = false"
							>
								<svg
									class="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div
							class="box-border relative flex-auto p-6 leading-5 text-gray-800 text-md"
						>
							<transition
								mode="out-in"
								enter-active-class="duration-300 ease-out"
								enter-from-class="scale-95 translate-x-10 opacity-0"
								enter-to-class="translate-x-0 opacity-100 sm:scale-100"
								leave-active-class="duration-300 ease-in"
								leave-from-class="translate-x-0 opacity-100 sm:scale-100"
								leave-to-class="-translate-x-10 opacity-0 sm:scale-95"
								@beforeLeave="beforeLeave"
								@enter="enter"
								@afterEnter="afterEnter"
							>
								<div class="whitespace-pre-wrap transform" :key="msg">
									{{ msg }}
									<div id="msg"></div>
								</div>
							</transition>
						</div>
						<transition
							mode="out-in"
							enter-active-class="duration-300 ease-out"
							enter-from-class="translate-y-10 opacity-0"
							enter-to-class="translate-y-0 opacity-100 sm:scale-100"
							leave-active-class="duration-300 ease-in"
							leave-from-class="translate-y-0 opacity-100 sm:scale-100"
							leave-to-class="translate-y-10 opacity-0"
							@beforeLeave="beforeLeave"
							@enter="enter"
							@afterEnter="afterEnter"
						>
							<div
								:key="buttons"
								class="box-border grid flex-shrink-0 grid-cols-2 gap-2 px-4 pt-0 pb-3 leading-5 text-gray-800 transform border-t-0 border-gray-300 border-solid"
							>
								<button
									v-for="button in buttons"
									:key="button"
									@click="callback(button.content)"
									type="button"
									class="px-4 py-2 text-sm transition-transform duration-200 transform"
									:class="
										button.variant != null
											? variants[button.variant]
											: variants['default'] + ' ' + button.class
									"
									data-bs-dismiss="modal"
								>
									{{ button.content }}
								</button>
								<!-- <button
								@click="callback('blub')"
								type="button"
								class="px-4 py-2 text-sm text-gray-700 duration-200 bg-white border border-gray-200 rounded hover:bg-gray-100"
								data-bs-dismiss="modal"
							>
								Close Modal
							</button>
							<button
								type="button"
								class="px-4 py-2 text-sm text-white duration-200 bg-green-600 border rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
								data-bs-dismiss="modal"
								@click="callback('blop')"
							>
								Approve
							</button> -->
							</div>
						</transition>
					</div>
				</transition>
			</div>
		</div>
	</VAqueduct>
</template>

<script>
import VAqueduct from "./vAqueduct";

export default {
	components: {
		VAqueduct
	},
	data() {
		return {
			visible: false,
			destroyCallback: null,
			prevHeight: 0,
			variants: {
				default: 'bg-white border text-gray-700 border-gray-200 rounded hover:bg-gray-100  focus:outline-none',
				success: 'text-white bg-green-600 border rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500',
			}
		}
	},
	methods: {
		destroy(callback) {
			this.destroyCallback = callback;
			this.visible = false;
		},
		beforeLeave(element) {
			this.prevHeight = getComputedStyle(element).height;
		},
		enter(element) {
			const { height } = getComputedStyle(element);

			element.style.height = this.prevHeight;

			setTimeout(() => {
				element.style.height = height;
			});
		},
		afterEnter(element) {
			element.style.height = "auto";
		},
	}
}
</script>

<style>
</style>