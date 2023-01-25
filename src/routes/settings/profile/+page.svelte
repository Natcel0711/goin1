<script lang="ts">
    export let data
</script>
<form>
    <div class="grid">
        <label for="username">
            Username
            <input type="text" id="username" name="username" placeholder="Username" required />
        </label>
        
    </div>
    <button>Save</button>
</form>
<style>
    button{
        width: fit-content;
        height: max-content;
    }
</style>