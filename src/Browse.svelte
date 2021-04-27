<script>
  import PageHeader from './PageHeader.svelte';
  import Categories from './Categories.svelte';
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let activities;
  // export let selection = true;
</script>

<div class="container">
  <PageHeader pageName="Browse" />

  <!-- {#if !selection} -->
    <Categories on:chill on:active on:social />
  <!-- {:else} -->

    <div class="grid">
      <!--ei käytetty id:tä, koska tupla-arvot ovat mahdollisia-->
      {#each activities as activity}
        <div class="grid-item">
          <p>{activity.activity}</p>
          <!--rahamerkki hinnan mukaan?-->
        </div>
      {/each}
    </div>
    <div class="refresh">
      <Button on:click={() => dispatch('new')}>Refresh</Button>
    </div>
  <!-- {/if} -->
</div>

<style>
  .container {
    height: 100%;
  }
  .grid {
    max-width: 90%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 5em 5em 5em;
    gap: 0.5em;
  }

  .grid-item {
    outline: auto;
  }
  p {
    font-size: 0.8em;
    height: max-content;
    align-self: center;
  }
  .refresh{
    width: 20%;
  }
</style>
