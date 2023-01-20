<script lang="ts">
	import type { PageData } from "./$types";


    export let data:PageData;
</script>

{#if data.user}
<article>
	<header>Header</header>
	<h1>Hello {data.user.email}</h1>
	<footer>Footer</footer>
</article>
{:else}
<article>
	<header>Header</header>
	<a href="/login" role="button">Link</a>
	<footer>Footer</footer>
</article>
{/if}
