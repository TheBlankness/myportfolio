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
		<div class="text-transparent bg-transparent">ඞ</div>
		<div class="text-transparent bg-transparent">ඞ</div>
		<div class="text-transparent bg-transparent">ඞ</div>
		<div class="text-transparent bg-transparent">ඞ</div>
		<div class="text-transparent bg-transparent">ඞ</div>
	</div>
</div>
<div class="h-screen bg-white">
	<div class="pt-32 container flex flex-row justify-between">
		<div class="ml-10 p-6 lg:p-30 w-2/6">
			<div
				class="text-neutral-400 text-1xl lg:text-5xl font-normal font-['Monda'] whitespace-nowrap"
			>
				About me
			</div>
		</div>
		<div class="flex flex-col justify-evenly w-4/6">
			<div
				class="pr-2 text-justify text-black text-md lg:text-3xl font-normal font-['Monda'] leading-[32px]"
			>
				👋 Hi, I'm Hazim, a passionate web developer with a primary focus on SvelteKit and
				TailwindCSS. I thrive on creating dynamic and visually stunning web applications that not
				only function flawlessly but also deliver an exceptional user experience.
			</div>
			<div
				class="pr-2 mt-14 text-justify text-black text-md lg:text-3xl font-normal font-['Monda'] leading-[32px]"
			>
				💻 My expertise extends beyond SvelteKit and TailwindCSS, as I'm well-versed in various
				JavaScript frameworks like React and Vue.js. This versatility allows me to adapt to
				different project requirements and deliver top-notch solutions.
			</div>
		</div>
	</div>
</div>
<div class="h-screen bg-white" />
