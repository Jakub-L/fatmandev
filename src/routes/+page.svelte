<script lang="ts">
	import Card from '../components/card.svelte';
	import SocialLinks from '../components/social-links.svelte';

	let projects = [
		{
			title: 'Monad5 • Shadowrun 5E player aid',
			imgSources: [
				{ src: 'project-images/monad.webp', type: 'image/webp' },
				{ src: 'project-images/monad.png', type: 'image/png' }
			],
			live: { href: 'https://monad5.fatman.dev/', text: 'monad.fatman.dev' },
			repo: null,
			description:
				'Web tool for Shadowrun 5E players. Started as a cyberdeck aid, but I have been adding more functionality over time. Mobile-first, as it was intented to be used at the gaming table. Built using Svelte and TailwindCSS.'
		},
		{
			title: '/24 • Subnetting calculator',
			imgSources: [
				{ src: 'project-images/slash-24.webp', type: 'image/webp' },
				{ src: 'project-images/slash-24.png', type: 'image/png' }
			],
			live: { href: '/24', text: 'fatman.dev/24' },
			repo: { href: 'https://github.com/Jakub-L/slash-24', text: 'Github repository' },
			description:
				'Web-based subnetting tool. It explains the principles behind IP addresses and subnet masks, and allows interactive calculations, showing bit-by-bit changes. Built using pure HTML, CSS and JS, fully accessible, responsive, with a dark and light mode.'
		},
		{
			title: 'fatman.dev • My dev homepage',
			imgSources: [
				{ src: 'project-images/fatmandev.webp', type: 'image/webp' },
				{ src: 'project-images/fatmandev.png', type: 'image/png' }
			],
			live: { href: '/', text: 'fatman.dev' },
			repo: { href: 'https://github.com/Jakub-L/fatmandev', text: 'Github repository' },
			description: 'This site! Simple homepage for listing all my projects. Built using SvelteKit and TailwindCSS.'
		}
	];
</script>

<h1 class="text-4xl text-red-500">fatman.dev</h1>
<SocialLinks />
<section>
	{#each projects as project}
		<Card {...project} />
	{/each}
</section>
