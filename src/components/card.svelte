<script lang="ts">
	type Link = { href: string; text?: string };

	export let title: string;
	export let subtitle: string;
	export let imgSources: { src: string; type: string }[];
	export let repo: Link | null = null;
	export let live: Link;
	export let description: string;
</script>

<article
	class="grid w-full max-w-2xl grid-cols-[1fr_4fr] items-start gap-4 rounded-lg border border-red-700 bg-red-950 bg-opacity-50 p-4"
>
	<div class="w-full xs:row-span-2 flex items-center h-full xs:h-auto">
		<picture>
			{#each imgSources as { src, type }, i}
				{#if i !== 0}
					<source srcset={src} {type} />
				{:else}
					<img class="h-full w-full" {src} alt="" role="presentation" />
				{/if}
			{/each}
		</picture>
	</div>
	<h2 class="self-center text-xl font-bold lowercase">{title} • {subtitle}</h2>
	<p class="col-span-2 text-sm xs:col-span-1">{description}</p>
	<div
		class="col-span-2 flex items-center border-t border-red-700 pt-1 text-sm"
		class:justify-between={repo}
		class:justify-end={!repo}
	>
		{#if repo}
			<a
				href={repo.href}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-start gap-2 rounded-full px-1 underline decoration-dotted hover:scale-105 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-red-200"
			>
				<img src="/ui/github-logo.svg" alt="" role="presentation" class="h-5 w-5" />
				Github repository
				<span class="sr-only">(opens in new tab)</span>
			</a>
		{/if}
		<a
			href={live.href}
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center justify-end gap-2 rounded-full px-1 underline decoration-dotted hover:scale-105 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-red-200"
		>
			<span aria-hidden="true">{live.text ?? live.href}</span>
			<span class="sr-only">{title} live site (opens in new tab)</span>
		</a>
	</div>
</article>
