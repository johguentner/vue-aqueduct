<template>
	<VAqueduct
		name="alert"
		#default="{ title, msg, type }"
		:destroyFunction="destroy"
		@triggered="visible = true"
	>
		<transition
			mode="out-in"
			enter-active-class="duration-300 ease-out"
			enter-from-class="-translate-y-10 opacity-0"
			enter-to-class="translate-y-0 opacity-100 sm:scale-100"
			leave-active-class="duration-300 ease-in"
			leave-from-class="translate-y-0 opacity-100 sm:scale-100"
			leave-to-class="translate-y-10 opacity-0"
			@after-leave="if (!title) destroyCallback();"
		>
			<div v-show="visible" :key="type" class="transform">
				<div
					v-if="type == 'error'"
					class="flex items-center gap-5 p-10 bg-red-100 rounded"
				>
					<svg
						class="w-10 h-10 text-red-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<div>
						<span class="block font-bold text-red-800">{{ title }}</span>
						<span class="text-red-700">{{ msg }}</span>
					</div>
				</div>
				<div
					v-else-if="type == 'info'"
					class="flex items-center gap-5 p-10 transform bg-indigo-100 rounded"
				>
					<svg
						class="w-10 h-10 text-indigo-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<div>
						<span class="block font-bold text-indigo-800">{{ title }}</span>
						<span class="text-indigo-700">{{ msg }}</span>
					</div>
				</div>

				<div
					v-else-if="type == 'success'"
					class="flex items-center gap-5 p-10 transform bg-green-100 rounded"
				>
					<svg
						class="w-10 h-10 text-green-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<div>
						<span class="block font-bold text-green-800">{{ title }}</span>
						<span class="text-green-700">{{ msg }}</span>
					</div>
				</div>
				<div
					v-else-if="type == 'plain' || type == null"
					class="flex items-center gap-5 p-10 transform border border-gray-300 rounded bg-gray-50"
				>
					<div>
						<span class="block font-bold text-gray-800">{{ title }}</span>
						<span class="text-gray-700">{{ msg }}</span>
					</div>
				</div>
			</div>
		</transition>
	</VAqueduct>
</template>

<script>
import VAqueduct from "./vAqueduct";

export default {
	components: { VAqueduct },
	data() {
		return {
			visible: false,
			destroyCallback: () => { },
		}
	},
	methods: {
		destroy(callback) {
			this.destroyCallback = callback;
			this.visible = false;
		},
	}
}
</script>

<style>
</style>