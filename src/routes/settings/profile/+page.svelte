<script lang="ts">
    import type { PageData } from "./$types";


    export let data:PageData;
</script>
<form>
    <div class="gridi">
        <div class="asido">
            <label for="username">
                Username
                <input value={data.user?.username} type="text" id="username" name="username" placeholder="Username" required />
            </label>
        </div>
        <div class="seccionado">
            <a href="#" role="button" class="secondary">Save</a>
        </div>
    </div>
</form>
<style>
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
