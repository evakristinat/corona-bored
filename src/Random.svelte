<script>
  import PageHeader from './PageHeader.svelte';
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let promise;
</script>

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
    <h4>{todo.activity}</h4>
  {:catch error}
    <p>{error.message}</p>
  {/await}

  <Button on:click={() => dispatch('ok')}>OK</Button>
  <Button on:click={() => dispatch('new')}>Maybe something else</Button>
  
  <slot name="footer" />
</section>

<style>
  section {
    z-index: 0;
  }
  p {
    padding: 1%;
  }
</style>
