<script lang="ts">
	import type { PageData } from "./$types";


    export let data:PageData;
</script>

{#if data.user}
<article>
	<header></header>
	<h1 class="headerName">Hello {data.user.name}</h1>
	<hr class="solid">
	<h3>Summary</h3>
	<div class="grid"></div>
	<footer></footer>
</article>
{:else}
<article>
	<header></header>
	<a href="/login" role="button">Register</a>
	<footer></footer>
</article>
{/if}

<style>
	hr.solid{
		border-top: 3px solid #bbb;
	}
	h1.headerName{
		margin-bottom: 0px;
	}
</style>