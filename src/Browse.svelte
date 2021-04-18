<script>
import PageHeader from './PageHeader.svelte';
export let activities;
</script>

<div>
  <PageHeader pageName='Browse'/>

  <div class="grid">
  {#each activities as activity }
  <div class="grid-item">
    <p>{activity.activity}</p>
  </div>
  {/each}
</div>
</div>

<style>
  .grid{
    max-width: 90%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 5em 5em 5em;
    gap: 0.5em;
  }

  .grid-item{
    outline: auto;
  }
  p{
    font-size: 0.8em;
    height: max-content;
    align-self: center;
  }

</style>