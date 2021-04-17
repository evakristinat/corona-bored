<script>
  import { Button, ButtonGroup } from 'svelte-mui';
  import { createEventDispatcher } from 'svelte';
  import { bind } from 'svelte/internal';

  const dispatch = createEventDispatcher();
  export let rangelabel = 'How active do you feel?';
  export let buttonLabel ='Alone or with people?'
  export let button1Clicked = true;
  export let button2Clicked = false;

  export let activity = 0.5;
  // export let type ='';
</script>

<section>
  <div class="headers">
<slot name="eyebrowHeader">
  <p>OPTIONS</p>
</slot>
  <slot name="optionsHeader">
    <h2>Page header</h2>
  </slot>
  <slot>
    <p>this tells you what happens here</p>
  </slot>
</div>

<form on:submit|preventDefault>

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

    <Button on:click={()=>dispatch('one')} icon dense outlined={button1Clicked}>
      <!--app-svelteen kuvat-->
      <slot name="iconButton1">
        <img src="user.svg" alt="one" />
      </slot>
    </Button>
    <Button on:click={()=>dispatch('two')} icon dense outlined={button2Clicked}>
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
  .headers{
    text-align: left;
    padding-left: 3vw;
    padding-bottom: 3vh;
  }
  .quantity,
  .activity {
    padding: 5%;
    display: grid;
    grid-template-columns: auto auto auto;
  }

  label{
    justify-self: left;
  }

  footer{
    text-align: right;
    padding-top: 4vh;
  }


</style>
