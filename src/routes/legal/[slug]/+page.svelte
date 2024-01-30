<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.legal.title}</title>
</svelte:head>

<section class="px-5 py-20">
	<div class="container mx-auto max-w-screen-lg flex flex-col gap-10">
		<div class="flex flex-col gap-4">
			<h1 class="text-3xl font-medium">{data.legal.title}</h1>
			<p class="text-lg">{data.legal.summery}</p>
		</div>
		<div class="prose">{@html data.legal.body.html}</div>
	</div>
</section>
