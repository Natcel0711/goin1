<script lang="ts">
	import type { PageData } from "./$types";


    export let data:PageData;
</script>

{#if data.user}
<article>
	<header></header>
	<h1>Hello {data.user.name}</h1>
	<footer></footer>
</article>
{:else}
<article>
	<header></header>
	<a href="/login" role="button">Register</a>
	<footer></footer>
</article>
{/if}
