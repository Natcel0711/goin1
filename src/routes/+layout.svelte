<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
    import '@picocss/pico'
    import '../app.css'
    export let data
</script>

<Nav user={data.user} />
<main class="container">
    <slot />
</main>