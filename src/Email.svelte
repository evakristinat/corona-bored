<script>
import { Textfield, Checkbox } from 'svelte-mui';

  export let selectedToDo;
  $: checked = false;
</script>

<section>
  <h2>Great! Have fun with {selectedToDo}! Do come back for more suggestions if you're still bored </h2>
  <h3>OR</h3>
  <h2>Get daily suggestions!</h2>
  <p>Would you like to receive daily suggestions on what to do?</p>
  <Checkbox bind:checked><p>I would like to receive suggestions</p></Checkbox>
  {#if checked}
    <Textfield label="email" message="your email will not be saved anywhere"/>
  {/if}
</section>

<style>
</style>
