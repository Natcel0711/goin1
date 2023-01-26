<script>
  export let data
</script>
<table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    {#each data.users as user}
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
    {/each}
  </tbody>
</table>