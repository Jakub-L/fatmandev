<script lang="ts">
	type Link = { href: string; text?: string };

	export let title: string;
	export let imgSources: { src: string; type: string }[];
	export let repo: Link | null = null;
	export let live: Link;
	export let description: string;
</script>

<div
	class={`m-2 grid w-full max-w-2xl grid-cols-5 items-start gap-4
		rounded-lg border border-red-700 bg-red-950 bg-opacity-50 p-4`}
>
	<div class="w-full xs:row-span-2">
		<picture >
			{#each imgSources as { src, type }, i}
				{#if i !== 0}
					<source srcset={src} {type} />
				{:else}
					<img class="w-full h-full" {src} alt={`${title} - project image`} />
				{/if}
			{/each}
		</picture>
	</div>
	<h2 class="col-span-4 self-center text-xl font-bold lowercase">{title}</h2>
	<p class="col-span-5 text-sm xs:col-span-4">{description}</p>
	<div class="col-span-5 flex items-center justify-between border-t border-red-700 pt-1 text-sm">
		{#if repo}
			<a
				href={repo.href}
				target="_blank"
				class={`flex items-center justify-start gap-2 rounded-full px-1 underline decoration-dotted 
					hover:scale-105 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-red-200`}
			>
				<img src="/ui/github-logo.svg" alt="Github repository" class="h-5 w-5" />
				{repo.text ?? repo.href}
			</a>
		{/if}
		<a
			href={live.href}
			target="_blank"
			class={`flex items-center justify-end gap-2 rounded-full px-1 underline decoration-dotted 
				hover:scale-105 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-red-200`}
		>
			{live.text ?? live.href}
		</a>
	</div>
</div>
