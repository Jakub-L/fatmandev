<script lang="ts">
	import Card from '../components/card.svelte';
	import SocialLinks from '../components/social-links.svelte';

	let projects = [
		{
			title: 'Factotum • A Mythras toolset',
			imgSources: [
				{ src: 'project-images/factotum.webp', type: 'image/webp' },
				{ src: 'project-images/factotum.png', type: 'image/png' }
			],
			live: { href: 'https://factotum.fatman.dev/', text: 'factotum.fatman.dev' },
			repo: null,
			description:
				'A set of tools for the Mythras RPG, including a dice roller and a combat tracker. I built it with responsive design in mind, so it could be used as a table aid on mobile devices. Built using Svelte and TailwindCSS.'
		},
		{
			title: 'Monad//Map • Cyberpunk city map editor',
			imgSources: [
				{ src: 'project-images/monad-map.webp', type: 'image/webp' },
				{ src: 'project-images/monad-map.png', type: 'image/png' }
			],
			live: { href: 'https://monad-map.fatman.dev/', text: 'monad-map.fatman.dev' },
			repo: { href: 'https://github.com/Jakub-L/monad-map', text: 'Github repository' },
			description:
				'A Maplibre-based map editor for creating cyberpunk city maps. Allows drag-and-drop placement of points of interest and exporting to local files. Manages multiple maps in local storage. Built using Svelte, Maplibre GL JS and TailwindCSS.'
		},
		{
			title: '//Rampart • Delta Green agent manager',
			imgSources: [
				{ src: 'project-images/rampart.webp', type: 'image/webp' },
				{ src: 'project-images/rampart.png', type: 'image/png' }
			],
			live: { href: 'https://rampart.fatman.dev/', text: 'rampart.fatman.dev' },
			repo: null,
			description:
				"An agent (player character) manager for the Delta Green RPG. Duplicates the paper character sheet, but it's a work in progress with features being added. Built using Nextjs and TailwindCSS."
		},
		{
			title: 'Monad5 • Shadowrun 5E player aid',
			imgSources: [
				{ src: 'project-images/monad.webp', type: 'image/webp' },
				{ src: 'project-images/monad.png', type: 'image/png' }
			],
			live: { href: 'https://monad5.fatman.dev/', text: 'monad5.fatman.dev' },
			repo: null,
			description:
				'Web tool for Shadowrun 5E players. Started as a cyberdeck aid, but I have been adding more functionality over time. Mobile-first, as it was intented to be used at the gaming table. Built using Svelte and TailwindCSS.'
		},
		{
			title: 'Animal Dictionary • A Polish-English visual learning aid',
			imgSources: [
				{ src: 'project-images/animal-dictionary.webp', type: 'image/webp' },
				{ src: 'project-images/animal-dictionary.png', type: 'image/png' }
			],
			live: { href: 'https://animals.fatman.dev/', text: 'animals.fatman.dev' },
			repo: { href: 'https://github.com/Jakub-L/animal-dictionary', text: 'Github repository' },
			description:
				'A visual dictionary of animals, with their taxonomies and names in Polish and English. Designed to help me teach my children about animals. Built using SvelteKit and TailwindCSS.'
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
			title: 'Playmat Visualiser • Showcase of colour permutations',
			imgSources: [
				{ src: 'project-images/playmat.webp', type: 'image/webp' },
				{ src: 'project-images/playmat.png', type: 'image/png' }
			],
			live: { href: 'https://playmat.fatman.dev/', text: 'playmat.fatman.dev' },
			repo: { href: 'https://github.com/Jakub-L/play-mat-calculator', text: 'Github repository' },
			description:
				"I have a child's playmat made of 16 tiles of 4 different colours. I wondered how many symmetric arrangements for it there are, so I made this page to visualise it. Build using pure HTML, CSS and JS."
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
<section class="flex flex-col gap-4">
	{#each projects as project}
		<Card {...project} />
	{/each}
</section>
