<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
    import '@picocss/pico'
    import '../app.css'
    import { Toaster } from 'svelte-french-toast';
    export let data
</script>

<Nav user={data.user} />
<Toaster />
<main class="container">
    <slot />
</main>