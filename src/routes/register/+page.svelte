<script lang="ts">
	import type { PageData } from "./$types";


    export let data:PageData
</script>
<article>
	<form action="?/register" method="post">
		<!-- Grid -->
        <div class="grid">

            <!-- Markup example 1: input is inside label -->
            <label for="firstname">
              First name
              <input type="text" id="firstname" name="firstname" placeholder="First name" required>
            </label>
        
            <label for="lastname">
              Last name
              <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
            </label>
        
          </div>

          <label for="email">Username</label>
		<input type="username" id="username" name="username" placeholder="Username" required />
		<small>We'll never share your email with anyone else.</small>

		<label for="email">Email address</label>
		<input type="email" value={data.email ?? ''} id="email" name="email" placeholder="Email address" required />
		<small>We'll never share your email with anyone else.</small>

		<!-- Markup example 2: input is after label -->
		<label for="password">Password</label>
		<input type="password" id="password" name="password" placeholder="Password" required />

		<!-- Button -->
		<button type="submit">Submit</button>
	</form>
</article>