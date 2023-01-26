<script lang="ts">
	import { enhance, type SubmitFunction } from "$app/forms";


  export let user
  let loading = false
  let btnPlaceholder = "Logout"

  const OnSubmitLogout:SubmitFunction = ({  }) => {
    btnPlaceholder = "Please wait..."
		loading = true
		return async ({ result, update }) => {
      btnPlaceholder = "Logout"
			loading = false
			update();
		};
	};
</script>
<form action="/logout" method="post" use:enhance={OnSubmitLogout}>
    <nav style="margin-left: 10px;margin-right: 10px;">
        <ul>
          <li><a href="/"><strong>Go In 1</strong></a></li>
        </ul>
        <ul>
          {#if !user}
          <li><a href="/login">login</a></li>
          <li><a href="/register">register</a></li>
          {:else}
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link">Options</summary>
              <ul role="listbox">
                <li><a href="/settings/profile">Settings</a></li>
              </ul>
            </details>
          </li>
          <li><button aria-busy={loading} class="secondary" type="submit">{btnPlaceholder}</button></li>
          {/if}
        </ul>
      </nav>
</form>

<style>
  strong{
    color: black;
  }
  summary{
    color: black;
  }
  .contrast{
    background-color: dimgray;
  }
</style>