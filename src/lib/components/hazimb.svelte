<script>
	export let top = 0; // Prop for the 'top' value
	export let left = 0; // Prop for the 'left' value
</script>

<div class="">
	<div class="text_container rotate-[-33.31deg] absolute" style="top: {top}px; left: {left}px;">
		<div class="text text-zinc-100 text-9xl font-normal font-['Monda']">
			<span>Ahmad</span>
			<span>Hazim</span>
			<span>Imanuddin</span>
			<span>Ahmad</span>
			<span>Hazim</span>
			<span>Imanuddin</span>
		</div>
		<div class="ml-10 text text-zinc-100 text-9xl font-normal font-['Monda']">
			<span>Ahmad</span>
			<span>Hazim</span>
			<span>Imanuddin</span>
			<span>Ahmad</span>
			<span>Hazim</span>
			<span>Imanuddin</span>
		</div>
	</div>
</div>

<style>
	.text_container {
		overflow: hidden;
		display: flex;
		white-space: nowrap;
		z-index: -1;
	}
	.text {
		animation: animate_text 30s linear infinite; /* The animation property */
	}
	@keyframes animate_text {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>
