<script>
  import { Icon } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let rangelabel = 'rangelabel';

  export let activity = 0.5;
</script>

<section>
  <label for="range">{rangelabel}</label>
  <input
    name="range-input"
    id="range"
    type="range"
    min="0.0"
    max="1.0"
    step="0.1"
    bind:value={activity}
  />
  <div class="quantity">
    <p>Alone or with people?</p>
    <Icon>
    <img src="user.svg" alt="one" />
  </Icon>
  <Icon>
    <img src="users.svg" alt="group" />
  </Icon>
  </div>
</section>

<style>
</style>
