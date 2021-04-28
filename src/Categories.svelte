<script>
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  // export let chill = 'chill';
  // export let active = 'active';
  // export let social = 'social';
  
</script>

<!--Käytä näihin get context-->

<div class="buttongroup">
  <Button on:click={()=> dispatch('chill')}>
    <img src="" alt="" />
    Chill</Button
  >
  <Button on:click={()=> dispatch('active')}>
    <img src="" alt="" />
    Active</Button
  >
  <Button on:click={()=> dispatch('social')}>
    <img src="" alt="" />
    Social</Button
  >
</div>

<style>
  .buttongroup {
    display: flex;
    /* flex-direction: column; */
    justify-content:space-around;
  }

</style>
