<script lang="ts">
	import type { PageData } from "./$types";


    export let data:PageData
</script>
<article>
	<form action="?/login" method="post">
		<!-- Grid -->
		<label for="email">Email address</label>
		<input type="email" id="email" name="email" placeholder="Email address" required />
		<small>We'll never share your email with anyone else.</small>

		<!-- Markup example 2: input is after label -->
		<label for="password">Password</label>
		<input type="password" id="password" name="password" placeholder="Password" required />

		<!-- Button -->
		<button type="submit">Submit</button>
	</form>
</article>
