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
<article class="mainArt">
	<header></header>
	<a href="/register" role="button">Create Account</a>
	<h1> </h1>
	<h1>OR</h1>
	<a href="/login" role="button">Log in</a>
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
	article.mainArt{
		background-image: url("https://images.unsplash.com/photo-1473984951266-787b955c9e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
		text-align: center;
		background-position: center;
    	background-size: cover;
	}

	a{
		background-color: whitesmoke;
		border-color: black;
		color: black;
	}
</style>