<script>
  import { Textfield, Button } from 'svelte-mui';
  export let name = '';
  export let header = 'hello';
  export let firstButton = 'yes';
  export let secondButton ='no';
  export let info ='info';
  export let activity = 0.5;
</script>

<!--
Tämä komponentti tarjoaa useita tapoja käytölle.
Pohjaa voidaan käyttää sellaisenaan nimeämällä vain muuttujat
itse tai halutut osiot voidaan kirjoittaa uudelleen kutsuvassa
komponentissa.
-->

<div class="background">
  <section class="text-screen">
    <slot name="header">
      <h1>{header}</h1>
      <h4>{info}</h4>
    </slot>
    <div class="content">
      <Textfield bind:value={name} />
      <input type="range" min="0.0" max="1.0" step="0.1" bind:value={activity}>
      <Button on:click>
        {firstButton}
      </Button>
      <Button on:click>
        {secondButton}
      </Button>
    </div>
  </section>
</div>

<style>
  section {
    margin: 0;
  }

  h1, h4 {
    margin: 0;
    padding: 3%;
    font-weight: 200;
    text-transform: lowercase;
  }
  .background {
    position: fixed;
    background-color: rgba(48, 47, 47, 0.74);
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .text-screen {
    background-color: rgb(255, 251, 242);
    width: 90vw;
    height: 50vh;
    margin: auto;
    margin-top: 20%;
    z-index: 10;
  }
</style>
