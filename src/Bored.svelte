<script>
  import { Button } from 'svelte-mui';
  export let promise;
</script>

<section>
  <p>You could...</p>
  {#await promise}
    <p>loading</p>
  {:then todo}
    <h4>{todo.activity}</h4>
  {/await}
  <!--Virheenkäsittely?-->
  <Button on:click>YES</Button>
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
