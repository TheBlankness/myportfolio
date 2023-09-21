<script>
	import Hazimb from '$lib/components/hazimb.svelte';

	/**
	 * @type {number[]}
	 */
	let topValues = [];
	for (let top = -1500; top <= 1500; top += 150) {
		topValues.push(top);
	}
</script>

<div class="h-screen">
	<div class="">
		{#each topValues as topValue (topValue)}
			<Hazimb left={-500} top={topValue} />
		{/each}
	</div>

	<div class="flex justify-evenly items-center h-screen">
		<div>
			<div class=" text-black text-9xl font-normal font-['Monda']">Hi!</div>
			<div class=" text-black text-9xl font-normal font-['Monda']">I am</div>
			<div class=" text-black text-9xl font-normal font-['Monda']">Hazim</div>
			<div class="  text-black text-9xl font-normal font-['Monda']">Imanuddin</div>
		</div>
		<div class="text-transparent bg-transparent">d</div>
		<div class="text-transparent bg-transparent">d</div>
		<div class="text-transparent bg-transparent">d</div>
		<div class="text-transparent bg-transparent">d</div>
		<div class="text-transparent bg-transparent">d</div>
	</div>
</div>
<div class="h-screen bg-white" />
<div class="h-screen bg-white" />
