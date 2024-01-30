<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="px-5 py-20">
	<div class="container mx-auto max-w-screen-lg flex flex-col gap-10">
		<h1 class="text-3xl font-medium">Legal pages:</h1>
		<ul class="flex flex-col gap-y-6">
			{#each data.legals as legal (legal.id)}
				<li>
					<a href="/legal/{legal.slug}">{legal.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
