<script>
  import PageHeader from './PageHeader.svelte';
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Firework } from 'svelte-loading-spinners';

  const dispatch = createEventDispatcher();
  export let promise;
  export let header;
  let selectedToDo;
</script>

<div class="container" transition:slide={{ duration: 900 }}>
  <section>
    <slot name="header">
      <PageHeader pageName={header}>
        <p slot="info">Go through suggestions until you find something to do.</p>
      </PageHeader>
    </slot>
    <div class="suggestion-box" duration="1s">
      <!--Await-blocks tehty käyttäen pohjana
    https://svelte.dev/tutorial/await-blocks-->
      <p>You could...</p>
      {#await promise}
        <div class="loading" transiton:fade>
          <Firework color="grey"/>
        </div>
      {:then todo}
        <span>
          <h4 bind:this={selectedToDo}>{todo.activity}</h4>
        </span>
      {:catch error}
        <p>{error.message}</p>
      {/await}
      <div class="box">
      <Button on:click={() => dispatch('ok', selectedToDo)} raised color
        >OK</Button
      >
      <Button on:click={() => dispatch('new')} raised color
        >Maybe something else</Button
      >
    </div>
    </div>
  </section>
</div>

<style>
  .container {
    height: 100%;
    background-color: rgb(193, 180, 199);
  }

  .suggestion-box {
    width: 100%;
    margin: auto;
    padding-top:2vh;
    background-color: white;
    padding-bottom: 5%; 
    height: 20vh; 
  }

  h4,
  .loading {
    padding-top: 2vh;
    padding-bottom: 3vh;
    height: 4em;
    margin: 0;
    text-align: center;
  }

  span{
    display: inline-block;
    vertical-align: middle;
    line-height: 4em;
  }

  .loading {
    width: 1vh;
    margin-left: 47%;
  }
  .box{
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    width: 42vw;
    max-width: 330px;
  }

  @media(max-width:600px){
    .suggestion-box {
    margin-top: 5%;
    padding-bottom: 5%;
    height: 30vh;
  }

  .box{
    bottom: -80px;
    width: 90%;
  }

  .loading {
    position: absolute;
    width: 4%;
    margin-left: 48%;
    margin-right: 48%;
    top: 250px;
  }

  }
</style>
