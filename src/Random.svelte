<script>
  import { Button } from 'svelte-mui';
  export let promise;
</script>

<section>
  <!--Await-blocks tehty käyttäen
    https://svelte.dev/tutorial/await-blocks-->
  <p>You could...</p>
  {#await promise}
    <p>loading</p>
  {:then todo}
    <h4>{todo.activity}</h4>
  {:catch error}
    <p>{error.message}</p>
  {/await}
  <Button on:click>OK</Button>
  <Button on:click>Maybe something else</Button>

</section>

<style>
  section {
    z-index: 0;
  }
  p {
    padding: 1%;
  }
</style>
