<template>
	<VAqueduct
		name="msg"
		#default="{ msg, counter, callback, destroy, _created, test }"
	>
		<!-- <div>
			{{ msg }}
			<button @click="callback(test)">ok</button>
		</div> -->

		<div
			class="block fixed top-0 left-0 pr-1 w-full h-full leading-5 text-gray-800 box-border"
			tabindex="-1"
			role="dialog"
			style="
				transition: opacity 0.15s linear 0s;
				z-index: 1060;
				overflow: hidden auto;
				outline: 0px;
				backdrop-filter: blur(4px);
			"
		>
			<div
				class="flex relative items-center m-2 w-auto leading-5 text-gray-800 transform-none pointer-events-none box-border max-w-lg mx-auto"
				style="min-height: calc(100% - 1rem)"
			>
				<div
					class="flex relative flex-col w-full leading-5 text-gray-800 bg-clip-padding bg-gray-100 rounded border border-transparent border-solid pointer-events-auto box-border rounded-md shadow-xl"
				>
					<div
						class="flex flex-shrink-0 justify-between items-center py-0 pr-12 pl-6 leading-5 text-gray-800 bg-white border-b border-gray-300 border-solid box-border"
					>
						<h5 class="modal-title">Title?</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div
						class="relative flex-auto p-6 leading-5 text-gray-800 box-border"
					>
						Example Message
					</div>
					<div
						class="flex flex-wrap flex-shrink-0 justify-end items-center px-4 pt-0 pb-3 leading-5 text-gray-800 border-t-0 border-gray-300 border-solid box-border"
					>
						<button @click="destroy" type="button" class="btn me-auto" data-bs-dismiss="modal">
							Close Modal
						</button>
						<button
							type="button"
							class="btn btn-primary"
							data-bs-dismiss="modal"
						>
							Approve
						</button>
					</div>
				</div>
			</div>
		</div>
	</VAqueduct>
</template>

<script>
import VAqueduct from "./vAqueduct";

export default {
	components: {
		VAqueduct
	}
}
</script>

<style>
</style>