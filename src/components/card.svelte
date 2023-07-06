<script lang="ts">
	export let title: string;
	export let imgSources: { src: string; type: string }[];
	export let href: string;
	export let linkText: string = href;
</script>

<a
	{href}
	target="_blank"
	class={`m-4 grid w-full max-w-2xl auto-rows-auto grid-cols-4 items-center gap-4
		rounded-lg border border-red-700 bg-red-950 bg-opacity-50 p-4 
		hover:shadow-lg hover:shadow-red-700 hover:ring-2 hover:ring-red-700`}
>
	<div class="w-full xs:row-span-3">
		<picture class="w-full">
			{#each imgSources as { src, type }, i}
				{#if i !== 0}
					<source srcset={src} {type} />
				{:else}
					<img class="w-full" {src} alt={title} />
				{/if}
			{/each}
		</picture>
	</div>
	<h2 class="col-span-3 text-xl font-bold lowercase">{title}</h2>
	<p class="col-span-4 text-sm xs:col-span-3"><slot /></p>
	<span class="col-span-4 border-t border-red-700 pt-1 text-right text-xs">{linkText}</span>
</a>
