<script lang="ts">
	import Card from '../components/card.svelte';

	let projects = [
		{
			title: '/24 • Subnetting calculator',
			imgSources: [
				{ src: 'project-images/slash-24.webp', type: 'image/webp' },
				{ src: 'project-images/slash-24.png', type: 'image/png' }
			],
			live: { href: '/24', text: 'fatman.dev/24' },
			repo: { href: 'https://github.com/Jakub-L/slash-24', text: 'Github' },
			description:
				'Web-based subnetting tool. It explains the principles behind IP addresses and subnet masks, and allows interactive calculations, showing bit-by-bit changes. Built using pure HTML, CSS and JS, fully accessible, responsive, with a dark and light mode.'
		}
	];
</script>

<h1 class="text-4xl text-red-500">fatman.dev</h1>
{#each projects as project}
	<Card {...project} />
{/each}
