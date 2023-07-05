<script lang="ts">
	export let title: string;
	export let imgSrc: string;
	export let href: string;
	export let linkText: string = href;
</script>

<a
	{href}
	target="_blank"
	class="m-4 flex w-1/2 max-w-2xl gap-4 rounded-lg border border-red-700 bg-red-950 bg-opacity-50 p-4 hover:shadow-lg hover:shadow-red-700 hover:ring-2 hover:ring-red-700"
>
	<img src={imgSrc} alt={title} class="h-40 w-40 object-cover" />
	<div class="flex grow flex-col gap-2">
		<h2 class="text-xl font-bold lowercase">{title}</h2>
		<p class="grow text-sm"><slot /></p>
		<span class="border-t border-red-700 pt-1 text-xs text-right">{linkText}</span>
	</div>
</a>
