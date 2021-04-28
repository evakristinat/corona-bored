<script>
  import PageHeader from './PageHeader.svelte';
  import { Button } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let rangelabel = 'How active do you feel?';
  export let buttonLabel = 'Alone or with people?';

  let activity = 0.5;
  // export let type ='';
  let social = false;

  const toggle = () => {
    !social ? (social = true) : (social = false);
  };
   
</script>

<section>
  <PageHeader pageName="Options" />

  <form on:submit|preventDefault={()=> dispatch('send', { activity, social })}>
    <!--Vaihtoehtoinen tapa kuvakkeiden käyttämiseen nappeina-->

    <!-- <div class="type">
  <label for="this">Type of activity
<input id="this" type="radio" value='1' bind:group={type}>
<img src="user.svg" alt="">
</label>

<label for="that">
<input id="that" type="radio" value='2' bind:group={type}> 
<img src="users.svg" alt="">
</label>

</div> -->

    <div class="activity">
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
    </div>
    <div class="quantity">
      <label for="one">{buttonLabel}</label>

      <!--testaa pääkomponentissa Button bind:active!-->

      <Button on:click={toggle} type="button" icon dense outlined={!social}>
        <!--app-svelteen kuvat-->
        <slot name="iconButton1">
          <img src="user.svg" alt="one" />
        </slot>
      </Button>
      <Button on:click={toggle} type="button" icon dense outlined={social}>
        <slot name="iconButton2">
          <img src="users.svg" alt="group" />
        </slot>
        <!--app-svelteen kuvat-->
      </Button>
    </div>
    <footer>
      <Button type="submit">Let's go</Button>
    </footer>
  </form>
</section>

<style>
  .quantity,
  .activity {
    padding: 5%;
    display: grid;
    grid-template-columns: auto auto auto;
  }

  label {
    justify-self: left;
  }

  footer {
    text-align: right;
    padding-top: 4vh;
  }
</style>
