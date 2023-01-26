<script>
  export let user
</script>
<form action="/logout" method="post">
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
          <li><a role="button" class="contrast" type="submit">Logout</a></li>
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
</style>