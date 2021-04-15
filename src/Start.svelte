<script>
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  import Modal from './Modal.svelte';

  const dispatch = createEventDispatcher();

  export let activity = 0.5;
</script>

<div>
  <Modal header="so youre bored" on:yes on:no >
    <p slot="info">
      During the pandemic a lot of us live with restrictions, so let's first find out what's possible for you.
    </p>
    <label for="range">How active are you feeling today?</label>
    <input
      name="range-input"
      id="range"
      type="range"
      min="0.0"
      max="1.0"
      step="0.1"
      bind:value={activity}
    />

    <p>Are you able or up to to meeting people?</p>

    <div slot="footer">
      <Button on:click={()=> dispatch('ready')}> Give me something to do! </Button>
    </div>
  </Modal>
</div>

<style>

  input {
    display: block;
    margin: auto;
    width: 60vw;
    margin-top: 2%;
  }
</style>
