<script lang="ts">
</script>

<form>
	<div class="gridi">
		<div class="asido">
			<label for="linkedinurl">
				LinkedIn URL
				<input type="text" id="linkedinurl" name="linkedinurl" placeholder="URL" />
			</label>
		</div>
		<div class="seccionado">
			<a href="#" role="button" class="secondary">Save</a>
		</div>
	</div>
</form>
<hr class="solid" />
<form action="">
	<label for="file"
		>Documentos
		<input type="file" id="file" name="file" />
	</label>
</form>
<form action="">
	<details open>
		<summary>Documentos</summary>
		<p>Nombre de documento</p>
	</details>
</form>

<style>
	hr.solid {
		border-top: 3px solid #bbb;
	}
	a {
		color: whitesmoke;
	}
	.gridi {
		display: grid;
		grid-template-columns: 4fr 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
	}

	.asido {
		grid-area: 1 / 1 / 2 / 2;
	}
	.seccionado {
		grid-area: 1 / 2 / 2 / 3;
		display: flex;
		align-items: center;
	}
</style>
