<script>
	import { onMount } from 'svelte';

	const email = 'iddinishak@gmail.com';
	const phone = '012-3866217';

	const services = ['SvelteKit apps', 'PDF tools', 'Cloud systems', 'AI workflows'];

	const projects = [
		{
			title: 'JomCloud Network',
			kicker: 'Owner & Founder',
			description:
				'Founder and Director of JomCloud Network Sdn Bhd, building cloud-first tools and services.',
			url: 'https://www.jomcloud.com',
			image: '/lawcloudnet.png',
			alt: 'JomCloud Network website preview',
			tags: ['Cloud', 'Business', 'Platform']
		},
		{
			title: 'BildeoPC',
			kicker: 'AI Powered PC Shopping',
			description:
				'An AI-powered PC builder assistant and e-commerce platform for smarter hardware choices.',
			url: 'https://bildeopc.jomcloud.com/',
			image: '/bildeopc.png',
			alt: 'BildeoPC platform preview',
			tags: ['AI', 'Commerce', 'PC Builder']
		},
		{
			title: 'H2 Solutions',
			kicker: 'IT Solutions Services',
			description:
				'Practical IT solutions that help businesses run cleaner infrastructure and better workflows.',
			url: 'https://h2.jomcloud.com/',
			image: '/homelab.png',
			alt: 'H2 Solutions services preview',
			tags: ['IT', 'Support', 'Homelab']
		},
		{
			title: 'SvelteKit PDF Editor',
			kicker: 'PDF editor library',
			description:
				'A SvelteKit-powered PDF editor library for annotating, editing, and shaping document workflows in the browser.',
			url: 'https://sveltekit-pdf-editor.jomcloud.com',
			visual: 'pdf',
			tags: ['SvelteKit', 'PDF', 'Library']
		}
	];

	const stack = [
		'SvelteKit',
		'TailwindCSS',
		'React',
		'Vue',
		'Node',
		'Cloudflare',
		'Docker',
		'Automation'
	];

	const signals = [
		{ value: '04', label: 'featured builds' },
		{ value: '24/7', label: 'cloud-minded' },
		{ value: 'UI+Ops', label: 'full workflow' }
	];

	let darkMode = false;
	let mouseX = 0;
	let mouseY = 0;
	let cursorVisible = false;
	let contactName = '';
	let contactEmail = '';
	let company = '';
	let projectType = 'SvelteKit app';
	let message = '';
	let formStatus = '';

	onMount(() => {
		const storedTheme = localStorage.getItem('portfolio-theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		darkMode = storedTheme ? storedTheme === 'dark' : prefersDark;
		syncTheme();
	});

	function syncTheme() {
		if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;

		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
	}

	function toggleTheme() {
		darkMode = !darkMode;
		syncTheme();
	}

	/** @param {MouseEvent} event */
	function handlePointerMove(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		cursorVisible = true;
	}

	function hideCursor() {
		cursorVisible = false;
	}

	/** @param {SubmitEvent} event */
	function sendMessage(event) {
		event.preventDefault();

		const subjectName = contactName.trim() || 'Portfolio visitor';
		const subject = `Business enquiry from ${subjectName}`;
		const body = [
			`Name: ${contactName || 'Not provided'}`,
			`Email: ${contactEmail || 'Not provided'}`,
			`Company: ${company || 'Not provided'}`,
			`Project type: ${projectType}`,
			'',
			message || 'Tell me about your project.'
		].join('\n');

		formStatus = 'Opening your email app with the message ready to send.';
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	}
</script>

<svelte:head>
	<title>Hazim Imanuddin | SvelteKit Developer Portfolio</title>
	<meta
		name="description"
		content="Portfolio of Hazim Imanuddin, a SvelteKit and cloud-focused developer building modern web apps, PDF tools, AI workflows, and business systems."
	/>
</svelte:head>

<svelte:window on:mousemove={handlePointerMove} on:mouseleave={hideCursor} />

<div
	class="cursor-halo"
	class:is-visible={cursorVisible}
	style={`left: ${mouseX}px; top: ${mouseY}px;`}
	aria-hidden="true"
>
	<svg viewBox="0 0 72 72">
		<path d="M36 5 L45 27 L67 36 L45 45 L36 67 L27 45 L5 36 L27 27 Z" />
		<circle cx="36" cy="36" r="8" />
	</svg>
</div>
<div
	class="cursor-core"
	class:is-visible={cursorVisible}
	style={`left: ${mouseX}px; top: ${mouseY}px;`}
	aria-hidden="true"
/>

<main
	class="site-root min-h-screen bg-[#f6fbfa] text-[#050607] transition-colors duration-500 dark:bg-[#050607] dark:text-[#f8fff8]"
>
	<header class="fixed left-0 right-0 top-0 z-40">
		<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
			<a class="nav-mark" href="#home" aria-label="Hazim Imanuddin home">
				<span>HI</span>
			</a>
			<div class="nav-links">
				<a href="#work">Work</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</div>
			<button
				class="theme-toggle"
				type="button"
				on:click={toggleTheme}
				aria-label="Toggle dark mode"
			>
				<span>{darkMode ? 'Light' : 'Dark'}</span>
				<span class="toggle-orb" aria-hidden="true" />
			</button>
		</nav>
	</header>

	<section
		id="home"
		class="hero-section relative isolate flex min-h-screen items-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
	>
		<video class="hero-video" autoplay muted loop playsinline aria-hidden="true">
			<source src="/hazimloop.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="hero-wash" aria-hidden="true" />
		<div class="hero-grid" aria-hidden="true" />
		<div class="name-ribbon" aria-hidden="true">
			<span>Ahmad Hazim Imanuddin</span>
			<span>Ahmad Hazim Imanuddin</span>
			<span>Ahmad Hazim Imanuddin</span>
		</div>

		<div
			class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
		>
			<div class="max-w-4xl">
				<p class="eyebrow">Portfolio / SvelteKit / Cloud systems</p>
				<h1 class="hero-title">
					<span>Hi, I am</span>
					<strong>Hazim Imanuddin</strong>
				</h1>
				<p class="hero-copy">
					I build sharp web apps, PDF workflows, business tooling, and cloud-backed systems that
					feel fast, useful, and a little bit fun to touch.
				</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<a class="action-button primary" href="#work">View projects</a>
					<a class="action-button secondary" href={`mailto:${email}`}>Email me</a>
				</div>
				<div class="mt-10 grid max-w-xl grid-cols-3 gap-3">
					{#each signals as signal}
						<div class="signal-tile">
							<strong>{signal.value}</strong>
							<span>{signal.label}</span>
						</div>
					{/each}
				</div>
			</div>

			<div class="tech-panel" aria-label="Interactive technology panel">
				<svg class="tech-svg" viewBox="0 0 420 420" role="img" aria-label="Animated circuit orbit">
					<defs>
						<linearGradient id="circuit-line" x1="0" x2="1" y1="0" y2="1">
							<stop offset="0%" stop-color="#00d8ff" />
							<stop offset="55%" stop-color="#b7ff2a" />
							<stop offset="100%" stop-color="#ff3d81" />
						</linearGradient>
					</defs>
					<path
						class="orbit orbit-one"
						d="M210 38 C310 38 382 110 382 210 C382 310 310 382 210 382 C110 382 38 310 38 210 C38 110 110 38 210 38Z"
					/>
					<path
						class="orbit orbit-two"
						d="M90 252 C118 132 244 64 342 124 C394 156 398 254 338 308 C260 378 94 350 90 252Z"
					/>
					<path class="pulse-line" d="M96 212 H150 L174 166 L222 286 L252 214 H324" />
					<circle class="node node-one" cx="96" cy="212" r="9" />
					<circle class="node node-two" cx="324" cy="214" r="9" />
					<circle class="node node-three" cx="210" cy="210" r="58" />
				</svg>
				<div class="panel-content">
					<span class="panel-kicker">current mode</span>
					<strong>Designing tools that ship</strong>
					<div class="service-list">
						{#each services as service}
							<span>{service}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		id="about"
		class="section-pad border-y border-black/10 bg-white/80 dark:border-white/10 dark:bg-[#090b0a]"
	>
		<div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
			<div>
				<p class="section-kicker">About me</p>
				<h2 class="section-title">Developer with a builder's mindset.</h2>
			</div>
			<div class="min-w-0 space-y-6 text-lg leading-8 text-black/70 dark:text-white/70">
				<p>
					I focus on SvelteKit and TailwindCSS, with enough React, Vue, JavaScript, and cloud
					infrastructure experience to shape the whole product instead of only the pretty surface.
				</p>
				<p>
					My sweet spot is turning business ideas into interfaces people can actually use:
					dashboards, document tools, AI-assisted workflows, and systems that stay practical after
					launch.
				</p>
				<div class="stack-marquee" aria-label="Technology stack">
					<div>
						{#each [...stack, ...stack] as item}
							<span>{item}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="work" class="section-pad">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="section-heading">
				<p class="section-kicker">Selected work</p>
				<h2 class="section-title">Projects with a cleaner signal.</h2>
			</div>

			<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
				{#each projects as project}
					<article class="project-card">
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer"
							aria-label={`Open ${project.title}`}
						>
							<div class="project-visual">
								{#if project.visual === 'pdf'}
									<div class="pdf-preview" aria-hidden="true">
										<div class="pdf-toolbar">
											<span />
											<span />
											<span />
										</div>
										<div class="pdf-page">
											<div class="pdf-line wide" />
											<div class="pdf-line" />
											<div class="pdf-highlight" />
											<div class="pdf-comment">Sign</div>
										</div>
									</div>
								{:else}
									<img
										src={project.image}
										alt={project.alt}
										loading="lazy"
										width="1000"
										height="667"
									/>
								{/if}
								<svg class="card-circuit" viewBox="0 0 320 180" aria-hidden="true">
									<path d="M8 150 C70 84 94 112 148 76 C194 44 228 76 312 24" />
									<circle cx="148" cy="76" r="5" />
									<circle cx="312" cy="24" r="5" />
								</svg>
							</div>
							<div class="project-copy">
								<p>{project.kicker}</p>
								<h3>{project.title}</h3>
								<span>{project.description}</span>
								<div class="tag-row">
									{#each project.tags as tag}
										<small>{tag}</small>
									{/each}
								</div>
							</div>
						</a>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="contact" class="section-pad bg-[#eaf4f0] dark:bg-[#0b0d0c]">
		<div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
			<div>
				<p class="section-kicker">Business details</p>
				<h2 class="section-title">Have a build in mind?</h2>
				<p class="mt-6 max-w-xl text-lg leading-8 text-black/70 dark:text-white/70">
					Send a short brief and your email app will open with everything formatted. For quick
					contact, use
					<a class="text-link" href={`mailto:${email}`}>{email}</a> or call {phone}.
				</p>
			</div>

			<form class="contact-form" on:submit={sendMessage}>
				<div class="form-grid">
					<label>
						<span>Name</span>
						<input
							bind:value={contactName}
							type="text"
							name="name"
							autocomplete="name"
							placeholder="Your name"
						/>
					</label>
					<label>
						<span>Email</span>
						<input
							bind:value={contactEmail}
							type="email"
							name="email"
							autocomplete="email"
							placeholder="you@company.com"
						/>
					</label>
				</div>
				<label>
					<span>Company</span>
					<input
						bind:value={company}
						type="text"
						name="company"
						autocomplete="organization"
						placeholder="Company or project"
					/>
				</label>
				<label>
					<span>Project type</span>
					<select bind:value={projectType} name="project-type">
						<option>SvelteKit app</option>
						<option>PDF editor workflow</option>
						<option>Cloud or IT system</option>
						<option>AI product idea</option>
					</select>
				</label>
				<label>
					<span>Message</span>
					<textarea
						bind:value={message}
						name="message"
						rows="5"
						placeholder="Tell me what you want to build, improve, automate, or launch."
					/>
				</label>
				<div class="form-footer">
					<button class="action-button primary" type="submit">Leave a message</button>
					<p aria-live="polite">{formStatus}</p>
				</div>
			</form>
		</div>
	</section>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	:global(body) {
		overflow-x: hidden;
	}

	.site-root {
		width: 100%;
		overflow-x: hidden;
	}

	.hero-section {
		background: #f6fbfa;
	}

	.hero-video {
		position: absolute;
		inset: 0;
		z-index: -3;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: saturate(1.05) contrast(1.02);
	}

	.hero-wash {
		position: absolute;
		inset: 0;
		z-index: -2;
		background: radial-gradient(circle at 78% 20%, rgba(0, 216, 255, 0.3), transparent 32%),
			radial-gradient(circle at 82% 74%, rgba(183, 255, 42, 0.24), transparent 28%),
			linear-gradient(
				90deg,
				rgba(246, 251, 250, 0.9),
				rgba(246, 251, 250, 0.54) 46%,
				rgba(246, 251, 250, 0.16)
			);
	}

	:global(.dark) .hero-wash {
		background: radial-gradient(circle at 72% 20%, rgba(0, 216, 255, 0.26), transparent 31%),
			radial-gradient(circle at 86% 70%, rgba(255, 61, 129, 0.16), transparent 28%),
			linear-gradient(90deg, rgba(5, 6, 7, 0.9), rgba(5, 6, 7, 0.66) 48%, rgba(5, 6, 7, 0.28));
	}

	.hero-grid {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: linear-gradient(rgba(5, 6, 7, 0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(5, 6, 7, 0.06) 1px, transparent 1px);
		background-size: 46px 46px;
		mask-image: linear-gradient(90deg, black, transparent 72%);
	}

	:global(.dark) .hero-grid {
		background-image: linear-gradient(rgba(248, 255, 248, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(248, 255, 248, 0.08) 1px, transparent 1px);
	}

	.name-ribbon {
		position: absolute;
		left: -12vw;
		top: 12vh;
		z-index: -1;
		display: flex;
		width: 150vw;
		transform: rotate(-12deg);
		gap: 3rem;
		white-space: nowrap;
		color: rgba(5, 6, 7, 0.06);
		font-size: clamp(3rem, 11vw, 10rem);
		font-weight: 800;
		letter-spacing: 0;
		animation: ribbon-slide 24s linear infinite;
	}

	:global(.dark) .name-ribbon {
		color: rgba(248, 255, 248, 0.06);
	}

	.nav-mark,
	.theme-toggle,
	.nav-links {
		border: 1px solid rgba(5, 6, 7, 0.13);
		background: rgba(246, 251, 250, 0.72);
		backdrop-filter: blur(18px);
		box-shadow: 0 12px 40px rgba(5, 6, 7, 0.08);
	}

	:global(.dark) .nav-mark,
	:global(.dark) .theme-toggle,
	:global(.dark) .nav-links {
		border-color: rgba(248, 255, 248, 0.12);
		background: rgba(5, 6, 7, 0.62);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
	}

	.nav-mark {
		display: grid;
		width: 42px;
		height: 42px;
		place-items: center;
		border-radius: 8px;
		font-weight: 900;
	}

	.nav-links {
		display: none;
		align-items: center;
		gap: 0.25rem;
		border-radius: 999px;
		padding: 0.35rem;
	}

	.nav-links a {
		border-radius: 999px;
		padding: 0.55rem 0.9rem;
		font-size: 0.9rem;
		color: currentColor;
		transition: background-color 180ms ease, transform 180ms ease;
	}

	.nav-links a:hover,
	.nav-links a:focus-visible {
		background: rgba(0, 216, 255, 0.16);
		transform: translateY(-1px);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		border-radius: 999px;
		padding: 0.55rem 0.65rem 0.55rem 0.9rem;
		font-size: 0.9rem;
	}

	.toggle-orb {
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 999px;
		background: linear-gradient(135deg, #00d8ff, #b7ff2a);
		box-shadow: 0 0 22px rgba(0, 216, 255, 0.58);
	}

	.eyebrow,
	.section-kicker,
	.panel-kicker {
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: 0.75rem;
		font-weight: 800;
		color: #007c8f;
	}

	:global(.dark) .eyebrow,
	:global(.dark) .section-kicker,
	:global(.dark) .panel-kicker {
		color: #8ff6ff;
	}

	.hero-title {
		margin-top: 1rem;
		max-width: 880px;
		font-size: clamp(3.5rem, 11vw, 10.5rem);
		font-weight: 900;
		line-height: 0.88;
		letter-spacing: 0;
	}

	.hero-title span,
	.hero-title strong {
		display: block;
	}

	.hero-title strong {
		background: linear-gradient(100deg, currentColor 0%, #007c8f 44%, #5d8300 78%);
		background-clip: text;
		color: transparent;
	}

	:global(.dark) .hero-title strong {
		background-image: linear-gradient(100deg, #f8fff8 0%, #00d8ff 46%, #b7ff2a 84%);
	}

	.hero-copy {
		margin-top: 1.6rem;
		max-width: 680px;
		font-size: clamp(1.08rem, 2vw, 1.35rem);
		line-height: 1.7;
		color: rgba(5, 6, 7, 0.72);
	}

	:global(.dark) .hero-copy {
		color: rgba(248, 255, 248, 0.74);
	}

	.action-button {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 8px;
		padding: 0.9rem 1.1rem;
		font-weight: 800;
		transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
	}

	.action-button::after {
		position: absolute;
		inset: 0;
		content: '';
		transform: translateX(-110%);
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
		transition: transform 420ms ease;
	}

	.action-button:hover,
	.action-button:focus-visible {
		transform: translateY(-2px);
	}

	.action-button:hover::after,
	.action-button:focus-visible::after {
		transform: translateX(110%);
	}

	.action-button.primary {
		background: #050607;
		color: #f8fff8;
		box-shadow: 0 18px 45px rgba(0, 216, 255, 0.16);
	}

	:global(.dark) .action-button.primary {
		background: #f8fff8;
		color: #050607;
	}

	.action-button.secondary {
		border: 1px solid rgba(5, 6, 7, 0.2);
		background: rgba(246, 251, 250, 0.7);
	}

	:global(.dark) .action-button.secondary {
		border-color: rgba(248, 255, 248, 0.22);
		background: rgba(248, 255, 248, 0.08);
	}

	.signal-tile {
		border: 1px solid rgba(5, 6, 7, 0.11);
		border-radius: 8px;
		padding: 0.85rem;
		background: rgba(246, 251, 250, 0.58);
		backdrop-filter: blur(16px);
	}

	:global(.dark) .signal-tile {
		border-color: rgba(248, 255, 248, 0.12);
		background: rgba(248, 255, 248, 0.06);
	}

	.signal-tile strong,
	.signal-tile span {
		display: block;
	}

	.signal-tile strong {
		font-size: 1.4rem;
		line-height: 1;
	}

	.signal-tile span {
		margin-top: 0.35rem;
		font-size: 0.78rem;
		color: rgba(5, 6, 7, 0.58);
	}

	:global(.dark) .signal-tile span {
		color: rgba(248, 255, 248, 0.6);
	}

	.tech-panel {
		position: relative;
		display: grid;
		grid-template-rows: minmax(210px, 1fr) auto;
		gap: 1rem;
		min-height: 430px;
		border: 1px solid rgba(5, 6, 7, 0.12);
		border-radius: 8px;
		overflow: hidden;
		padding: 1.25rem;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.28)),
			radial-gradient(circle at 30% 20%, rgba(0, 216, 255, 0.2), transparent 34%);
		backdrop-filter: blur(24px);
		box-shadow: 0 28px 80px rgba(5, 6, 7, 0.12);
	}

	.tech-panel:hover .orbit-one {
		animation-duration: 5s;
	}

	.tech-panel:hover .pulse-line {
		stroke-dashoffset: 0;
	}

	:global(.dark) .tech-panel {
		border-color: rgba(248, 255, 248, 0.12);
		background: linear-gradient(135deg, rgba(5, 6, 7, 0.78), rgba(5, 6, 7, 0.42)),
			radial-gradient(circle at 30% 20%, rgba(0, 216, 255, 0.22), transparent 34%);
		box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35);
	}

	.tech-svg {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 210px;
		padding: 0.25rem;
	}

	.orbit,
	.pulse-line,
	.node {
		fill: none;
		stroke: url(#circuit-line);
		stroke-width: 3;
	}

	.orbit {
		transform-origin: center;
		stroke-dasharray: 12 12;
		animation: spin 15s linear infinite;
		opacity: 0.76;
	}

	.orbit-two {
		animation-direction: reverse;
		animation-duration: 20s;
	}

	.pulse-line {
		stroke-dasharray: 520;
		stroke-dashoffset: 520;
		transition: stroke-dashoffset 700ms ease;
	}

	.node {
		fill: rgba(246, 251, 250, 0.82);
	}

	:global(.dark) .node {
		fill: rgba(5, 6, 7, 0.88);
	}

	.node-three {
		opacity: 0.28;
	}

	.panel-content {
		position: relative;
		z-index: 1;
		border-radius: 8px;
		padding: 1rem;
		background: rgba(246, 251, 250, 0.76);
		backdrop-filter: blur(18px);
	}

	:global(.dark) .panel-content {
		background: rgba(5, 6, 7, 0.72);
	}

	.panel-content strong {
		display: block;
		margin-top: 0.45rem;
		font-size: 1.5rem;
		line-height: 1.1;
	}

	.service-list {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.service-list span,
	.tag-row small {
		border: 1px solid rgba(5, 6, 7, 0.12);
		border-radius: 999px;
		padding: 0.35rem 0.55rem;
		font-size: 0.78rem;
		color: rgba(5, 6, 7, 0.68);
	}

	:global(.dark) .service-list span,
	:global(.dark) .tag-row small {
		border-color: rgba(248, 255, 248, 0.13);
		color: rgba(248, 255, 248, 0.68);
	}

	.section-pad {
		padding: clamp(5rem, 9vw, 8rem) 0;
	}

	.section-heading {
		margin-bottom: 2.25rem;
		max-width: 760px;
	}

	.section-title {
		margin-top: 0.75rem;
		font-size: clamp(2.4rem, 6vw, 5.8rem);
		font-weight: 900;
		line-height: 0.95;
		letter-spacing: 0;
	}

	.stack-marquee {
		overflow: hidden;
		border-block: 1px solid rgba(5, 6, 7, 0.1);
		padding: 0.85rem 0;
	}

	:global(.dark) .stack-marquee {
		border-color: rgba(248, 255, 248, 0.1);
	}

	.stack-marquee div {
		display: flex;
		width: max-content;
		gap: 0.7rem;
		animation: stack-slide 22s linear infinite;
	}

	.stack-marquee span {
		border-radius: 999px;
		background: rgba(0, 216, 255, 0.12);
		padding: 0.45rem 0.8rem;
		font-size: 0.9rem;
		font-weight: 800;
	}

	.project-card {
		position: relative;
		border: 1px solid rgba(5, 6, 7, 0.11);
		border-radius: 8px;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.74);
		transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
	}

	.project-card:hover,
	.project-card:focus-within {
		transform: translateY(-6px);
		border-color: rgba(0, 216, 255, 0.7);
		box-shadow: 0 24px 70px rgba(0, 216, 255, 0.16);
	}

	:global(.dark) .project-card {
		border-color: rgba(248, 255, 248, 0.11);
		background: rgba(248, 255, 248, 0.055);
	}

	.project-card a {
		display: grid;
		min-height: 100%;
		color: inherit;
	}

	.project-visual {
		position: relative;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		background: #101211;
	}

	.project-visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		transition: transform 500ms ease, filter 500ms ease;
	}

	.project-card:hover img,
	.project-card:focus-within img {
		transform: scale(1.06);
		filter: saturate(1.15);
	}

	.card-circuit {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 220ms ease;
	}

	.card-circuit path,
	.card-circuit circle {
		fill: none;
		stroke: #b7ff2a;
		stroke-width: 3;
		filter: drop-shadow(0 0 10px rgba(183, 255, 42, 0.6));
	}

	.card-circuit path {
		stroke-dasharray: 380;
		stroke-dashoffset: 380;
		transition: stroke-dashoffset 580ms ease;
	}

	.project-card:hover .card-circuit,
	.project-card:focus-within .card-circuit {
		opacity: 1;
	}

	.project-card:hover .card-circuit path,
	.project-card:focus-within .card-circuit path {
		stroke-dashoffset: 0;
	}

	.project-copy {
		display: grid;
		gap: 0.85rem;
		padding: 1.15rem;
	}

	.project-copy p {
		color: #007c8f;
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.dark) .project-copy p {
		color: #8ff6ff;
	}

	.project-copy h3 {
		font-size: 1.35rem;
		font-weight: 900;
		line-height: 1.1;
	}

	.project-copy > span {
		color: rgba(5, 6, 7, 0.65);
		line-height: 1.65;
	}

	:global(.dark) .project-copy > span {
		color: rgba(248, 255, 248, 0.66);
	}

	.tag-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.pdf-preview {
		position: absolute;
		inset: 1rem;
		display: grid;
		grid-template-rows: auto 1fr;
		border: 1px solid rgba(248, 255, 248, 0.12);
		border-radius: 8px;
		background: linear-gradient(135deg, rgba(0, 216, 255, 0.18), rgba(183, 255, 42, 0.13)), #121514;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
	}

	.pdf-toolbar {
		display: flex;
		gap: 0.35rem;
		border-bottom: 1px solid rgba(248, 255, 248, 0.12);
		padding: 0.75rem;
	}

	.pdf-toolbar span {
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 999px;
		background: #00d8ff;
	}

	.pdf-toolbar span:nth-child(2) {
		background: #b7ff2a;
	}

	.pdf-toolbar span:nth-child(3) {
		background: #ff3d81;
	}

	.pdf-page {
		position: relative;
		margin: 1rem auto;
		width: 68%;
		border-radius: 6px;
		background: #f8fff8;
		padding: 1rem;
		box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
	}

	.pdf-line {
		height: 0.45rem;
		width: 68%;
		border-radius: 999px;
		background: #cbd6d0;
	}

	.pdf-line.wide {
		width: 88%;
		margin-bottom: 0.65rem;
	}

	.pdf-highlight {
		margin-top: 1rem;
		width: 72%;
		height: 2.8rem;
		border: 2px dashed #00a5bd;
		border-radius: 6px;
		background: rgba(0, 216, 255, 0.14);
	}

	.pdf-comment {
		position: absolute;
		right: -0.75rem;
		bottom: 1.2rem;
		border-radius: 6px;
		background: #ff3d81;
		padding: 0.45rem 0.6rem;
		color: #fff;
		font-size: 0.78rem;
		font-weight: 900;
		transform: rotate(-5deg);
	}

	.text-link {
		font-weight: 900;
		color: #007c8f;
	}

	:global(.dark) .text-link {
		color: #8ff6ff;
	}

	.contact-form {
		display: grid;
		gap: 1rem;
		border: 1px solid rgba(5, 6, 7, 0.11);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.7);
		padding: clamp(1rem, 3vw, 1.5rem);
		box-shadow: 0 24px 70px rgba(5, 6, 7, 0.1);
	}

	:global(.dark) .contact-form {
		border-color: rgba(248, 255, 248, 0.11);
		background: rgba(248, 255, 248, 0.055);
		box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
	}

	.form-grid {
		display: grid;
		gap: 1rem;
	}

	.contact-form label {
		display: grid;
		gap: 0.45rem;
	}

	.contact-form label span {
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(5, 6, 7, 0.62);
	}

	:global(.dark) .contact-form label span {
		color: rgba(248, 255, 248, 0.62);
	}

	.contact-form input,
	.contact-form select,
	.contact-form textarea {
		width: 100%;
		border: 1px solid rgba(5, 6, 7, 0.14);
		border-radius: 8px;
		background: rgba(246, 251, 250, 0.88);
		padding: 0.85rem 0.9rem;
		color: #050607;
		outline: none;
		transition: border-color 180ms ease, box-shadow 180ms ease;
	}

	:global(.dark) .contact-form input,
	:global(.dark) .contact-form select,
	:global(.dark) .contact-form textarea {
		border-color: rgba(248, 255, 248, 0.14);
		background: rgba(5, 6, 7, 0.7);
		color: #f8fff8;
	}

	.contact-form input:focus,
	.contact-form select:focus,
	.contact-form textarea:focus {
		border-color: #00a5bd;
		box-shadow: 0 0 0 3px rgba(0, 216, 255, 0.18);
	}

	.contact-form textarea {
		resize: vertical;
	}

	.form-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
	}

	.form-footer p {
		min-height: 1.5rem;
		color: rgba(5, 6, 7, 0.62);
	}

	:global(.dark) .form-footer p {
		color: rgba(248, 255, 248, 0.62);
	}

	.cursor-halo,
	.cursor-core {
		pointer-events: none;
		position: fixed;
		z-index: 80;
		display: none;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: opacity 120ms ease;
	}

	.cursor-halo {
		width: 58px;
		height: 58px;
		mix-blend-mode: difference;
	}

	.cursor-halo svg {
		width: 100%;
		height: 100%;
		animation: spin 7s linear infinite;
	}

	.cursor-halo path,
	.cursor-halo circle {
		fill: none;
		stroke: #ffffff;
		stroke-width: 3;
	}

	.cursor-core {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: #ffffff;
		mix-blend-mode: difference;
	}

	.cursor-halo.is-visible,
	.cursor-core.is-visible {
		opacity: 1;
	}

	@media (pointer: fine) {
		.cursor-halo,
		.cursor-core {
			display: block;
		}
	}

	@media (min-width: 640px) {
		.nav-links {
			display: flex;
		}

		.form-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 900px) {
		.tech-panel {
			min-height: 0;
			grid-template-rows: minmax(180px, 1fr) auto;
		}

		.tech-svg {
			min-height: 180px;
		}
	}

	@media (max-width: 640px) {
		.hero-title {
			font-size: clamp(3.2rem, 18vw, 5.2rem);
		}

		.signal-tile {
			padding: 0.7rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			scroll-behavior: auto !important;
			transition-duration: 0.01ms !important;
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes ribbon-slide {
		to {
			transform: rotate(-12deg) translateX(-28rem);
		}
	}

	@keyframes stack-slide {
		to {
			transform: translateX(-50%);
		}
	}
</style>
