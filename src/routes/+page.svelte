<script>
</script>

<div class="relative min-h-screen">
	<!-- Video Background -->
	<div class="fixed inset-0 -z-10">
		<video class="w-full h-full object-cover" autoplay muted loop>
			<source src="hazimloop.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>

	<!-- Content on top of the video -->
	<div class="px-20">
		<div class="z-10 flex flex-col justify-center items-start min-h-screen text-black">
			<div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal font-Monda">
				Hi!
			</div>
			<div
				class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal font-Monda whitespace-nowrap"
			>
				I am
			</div>
			<div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal font-Monda">
				Hazim
			</div>
			<div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal font-Monda">
				Imanuddin
			</div>
		</div>
	</div>
</div>

<div class="min-h-screen bg-white">
	<div class="pt-32 container flex flex-row justify-between">
		<div class="ml-10 p-6 lg:p-10 w-2/6">
			<div class="text-neutral-400 text-1xl lg:text-5xl font-normal font-Monda whitespace-nowrap">
				About me
			</div>
		</div>
		<div class="flex flex-col justify-evenly w-4/6">
			<div
				class="pr-2 text-justify text-black text-md lg:text-3xl font-normal font-Monda leading-[32px]"
			>
				👋 Hi, I'm Hazim, a passionate web developer with a primary focus on SvelteKit and
				TailwindCSS. I thrive on creating dynamic and visually stunning web applications that not
				only function flawlessly but also deliver an exceptional user experience.
			</div>
			<div
				class="pr-2 mt-14 text-justify text-black text-md lg:text-3xl font-normal font-Monda leading-[32px]"
			>
				💻 My expertise extends beyond SvelteKit and TailwindCSS, as I'm well-versed in various
				JavaScript frameworks like React and Vue.js. This versatility allows me to adapt to
				different project requirements and deliver top-notch solutions.
			</div>
		</div>
	</div>
	<div class="pt-32 container flex flex-row justify-between">
		<div class="ml-10 p-6 lg:p-10 w-2/6">
			<div class="text-neutral-400 text-1xl lg:text-5xl font-normal font-Monda whitespace-nowrap">
				Contact
			</div>
		</div>
		<div class="flex flex-col justify-evenly w-4/6">
			<div
				class="pr-2 text-justify text-black text-md lg:text-3xl font-normal font-Monda leading-[32px]"
			>
				📧 Email: iddinishak@gmail.com
			</div>
			<div
				class="pr-2 mt-14 text-justify text-black text-md lg:text-3xl font-normal font-Monda leading-[32px]"
			>
				📞 Phone: 012-3866217
			</div>
		</div>
	</div>
</div>

<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 min-h-screen">
	<div class="mt-28 mb-12 space-y-2 text-center">
		<h2 class="text-3xl font-bold text-gray-700 md:text-7xl">My Projects</h2>
		<p class="pt-11 text-1xl md:text-3xl lg:mx-auto lg:w-6/12 text-black dark:text-black">
			List of my past projects and personal projects
		</p>
	</div>
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		<div class="group p-6 sm:p-8 rounded-3xl bg-gray-700">
			<div class="relative overflow-hidden rounded-xl">
				<img
					src="lawcloudnet.png"
					alt="art cover"
					loading="lazy"
					width="1000"
					height="667"
					class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
				/>
			</div>
			<div class="mt-6 relative">
				<h3 class="text-2xl font-semibold text-white">Owner of LCNS: LawCloud Network Services</h3>
				<p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
					Founder and Director of the LawCloud Network Sdn Bhd.
				</p>
				<a class="inline-block text-white" href="https://github.com/bildeopc">
					<span class="text-info">Go to</span>
				</a>
			</div>
		</div>
		<div class="group p-6 sm:p-8 rounded-3xl bg-gray-700">
			<div class="relative overflow-hidden rounded-xl">
				<img
					src="bildeopc.png"
					alt="art cover"
					loading="lazy"
					width="1000"
					height="667"
					class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
				/>
			</div>
			<div class="mt-6 relative">
				<h3 class="text-2xl font-semibold text-white">BildeoPC: AI Powered PC Shopping</h3>
				<p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
					BildeoPC is an AI-powered PC builder assistant and e-commerce platform.
				</p>
				<a class="inline-block text-gray-200" href=" https://www.bildeopc.com/">
					<span class="text-info">Go to</span>
				</a>
			</div>
		</div>
		<div class="group p-6 sm:p-8 rounded-3xl bg-gray-700">
			<div class="relative overflow-hidden rounded-xl">
				<img
					src="homelab.png"
					alt="art cover"
					loading="lazy"
					width="1000"
					height="667"
					class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
				/>
			</div>
			<div class="mt-6 relative">
				<h3 class="text-2xl font-semibold text-white">My Personal HomeLab Project V1</h3>
				<p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
					One of my personal projects to become fully self-hosted.
				</p>
				<a class="inline-block text-white" href="https://github.com/TheBlankness/uptime-lawcloud">
					<span class="text-info">Go to</span>
				</a>
			</div>
		</div>
	</div>
</div>
