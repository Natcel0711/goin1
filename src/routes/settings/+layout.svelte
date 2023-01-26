<script lang="ts">
  import { page } from '$app/stores';
</script>
<main class="container">
	<div class="gridi">
		<aside class="asido">
			<ul>
				<li><a href="profile" class="{$page.route.id === '/settings/profile' ? 'secondary' : ''}">Profile</a></li>
				<li><a href="company" class="{$page.route.id === '/settings/company' ? 'secondary' : ''}">Company</a></li>
				<li><a href="admin" class="{$page.route.id === '/settings/admin' ? 'secondary' : ''}">Admin</a></li>
			</ul>
		</aside>
		<section class="seccionado">
			<slot />
		</section>
	</div>
</main>

<style>
	a {
		color: black;
	}
	.gridi {
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-template-rows: 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
	}

	.asido {
		grid-area: 1 / 1 / 2 / 2;
    border: black;
    border-right: solid;
	}
	.seccionado {
		grid-area: 1 / 2 / 2 / 3;
	}
</style>
