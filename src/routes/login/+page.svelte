<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData, PageData } from './$types';
  import {Hello} from '../../lib/helpers/UserHelper'
	import toast from 'svelte-french-toast';
	export let data: PageData;
	export let form: ActionData;
	let loading = false;
	
	const OnSubmitLogin: SubmitFunction = ({ form, data, action, cancel }) => {
		console.log('FORM: ', form);
		console.log('DATA: ', data);
		console.log('ACTION: ', action);

		return async ({ result, update }) => {
			console.log('RESULT: ', result);
			switch (result.type) {
				case 'failure':
					toast.error('wrong credentials!');
					break;
				case 'redirect':
					toast.success(Hello());
					break;
				default:
					break;
			}
			update();
		};
	};
</script>

<article class="grid">
	<div>
		<hgroup>
			<h1>Sign in</h1>
			<h2>Please submit your account credentials below</h2>
		</hgroup>
		<form action="?/login" method="post" use:enhance={OnSubmitLogin}>
			<input
				type="email"
				value={form?.email ?? ''}
				id="email"
				name="email"
				placeholder="Email address"
				required
			/>
			<input type="password" id="password" name="password" placeholder="Password" required />
			<fieldset>
				<label for="remember">
					<input type="checkbox" role="switch" id="remember" name="remember" />
					Remember me
				</label>
			</fieldset>
			<button aria-busy={loading} type="submit" class="contrast">Login</button>
		</form>
	</div>
	<div />
</article>

<style>
	article {
		padding: 0;
		overflow: hidden;
	}

	article div {
		padding: 1rem;
	}

	@media (min-width: 576px) {
		article div {
			padding: 1.25rem;
		}
	}

	@media (min-width: 768px) {
		article div {
			padding: 1.5rem;
		}
	}

	@media (min-width: 992px) {
		article div {
			padding: 1.75rem;
		}
	}

	@media (min-width: 1200px) {
		article div {
			padding: 2rem;
		}
	}

	/* Hero Image */
	article div:nth-of-type(2) {
		display: none;
		background-color: #374956;
		background-image: url('../../lib/styles/pics/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg');
		background-position: center;
		background-size: cover;
	}

	@media (min-width: 992px) {
		.grid > div:nth-of-type(2) {
			display: block;
		}
	}
</style>
