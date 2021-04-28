<script>
  import PageHeader from './PageHeader.svelte';
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let promise;
  let selectedToDo;

</script>

<div class="container">
<section>

  <slot name="header">
    <PageHeader pageName="Random" />
  </slot>

  <!--Await-blocks tehty käyttäen
    https://svelte.dev/tutorial/await-blocks-->
  <p>You could...</p>
  {#await promise}
    <p>loading</p>
  {:then todo}
    <h4 bind:this={selectedToDo}>{todo.activity}</h4>
  {:catch error}
    <p>{error.message}</p>
  {/await}

  <Button on:click={() => dispatch('ok', selectedToDo)}>OK</Button>
  <Button on:click={() => dispatch('new')}>Maybe something else</Button>
</section>

  <footer>
    <slot name="footer" />
  </footer>
</div>

<style>
  section {
    z-index: 0;
    min-height: 60vh;
  }
  p {
    padding: 1%;
  }
</style>
