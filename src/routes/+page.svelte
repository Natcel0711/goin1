<script lang="ts">
    export let data;
	console.log(data)
</script>

{#if data.user}
<article>
	<header>Header</header>
	<h1>Hello {data.user.name}</h1>
	<footer>Footer</footer>
</article>
{:else}
<article>
	<header>Header</header>
	<a href="/login" role="button">Link</a>
	<footer>Footer</footer>
</article>
{/if}
