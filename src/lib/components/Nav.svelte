<script>
  export let user
</script>
<form action="/logout" method="post">
    <nav style="margin-left: 10px;margin-right: 10px;">
        <ul>
          <li><strong></strong></li>
        </ul>
        <ul>
          {#if !user}
          <li><a href="/login">login</a></li>
          <li><a href="/register">register</a></li>
          {:else}
          <li><button type="submit">Logout</button></li>
          {/if}
        </ul>
      </nav>
</form>