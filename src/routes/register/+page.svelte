<script lang="ts">
	import { enhance, type SubmitFunction } from "$app/forms";
	import toast from "svelte-french-toast";
	import type { ActionData } from "./$types";

	export let form:ActionData

	let email:string
	let pass:string

	const OnSubmitLogin: SubmitFunction = ({  }) => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'failure':
					toast.error(result?.data?.error);
					email = ''
					pass = ''
					break;
				case 'redirect':
					toast.success("account created! 🎆");
					break;
				default:
					break;
			}
			update();
		};
	};
</script>
<article class="grid">
	<div class="imagebg"></div>
	<form action="?/register" method="post" use:enhance={OnSubmitLogin}>
		<div class="center">
			<h1>Register</h1>
		</div>
		<!-- Grid -->
        <div class="grid">

            <!-- Markup example 1: input is inside label -->
            <label for="firstname">
              First name
              <input type="text" value={form?.FirstName ?? ''} id="firstname" name="firstname" placeholder="First name" required>
            </label>
        
            <label for="lastname">
              Last name
              <input type="text" value={form?.LastName ?? ''} id="lastname" name="lastname" placeholder="Last name" required>
            </label>
        
          </div>

          <label for="username">Username</label>
		<input type="username" id="username" name="username" placeholder="Username" required />
		<small>Pick something unique!</small>

		<label for="email">Email address</label>
		<input type="email" bind:value={email}  id="email" name="email" placeholder="Email address" required />
		<small>We'll never share your email with anyone else.</small>

		<!-- Markup example 2: input is after label -->
		<label for="password">Password</label>
		<input type="password" bind:value={pass} id="password" name="password" placeholder="Password" required />
		<small>Pick something you will remember!</small>

		<!-- Button -->
		<button type="submit">Submit</button>
	</form>
</article>

<style>
	.center{
		text-align: center;
	}

	.imagebg{
    background-color: #374956;
    background-image: url("https://images.unsplash.com/photo-1592334737309-2b3f5c2fe32c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
    background-position: center;
    background-size: cover;
	}
	button{
		background-color: #374956;
	}
</style>