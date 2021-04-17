<script>
  import { createEventDispatcher } from 'svelte';
  import { Button } from 'svelte-mui';

  const dispatch = createEventDispatcher();
  
  export let header = 'hello';
  export let firstButton = 'yes';
  export let secondButton = 'no';
  export let info = 'info';
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
      <slot name="info">
        <h4>{info}</h4>
      </slot>
    </slot>

    <div class="content">
      <!-- 
      <Textfield bind:value={name} /> -->
      <slot />

      <slot name="buttonGroup">
        <Button on:click={()=> dispatch('yes')}>
          {firstButton}
        </Button>

        <Button change={()=> dispatch('no')}>
          {secondButton}
        </Button>
      </slot>
      <div class="footer">
        <slot name="footer" />
      </div>
    </div>
  </section>
</div>

<style>
  section {
    margin: 0;
  }

  h1,
  h4 {
    margin: 0;
    padding: 3%;
    font-weight: 200;
    text-transform: lowercase;
  }
/* 
  .background {
    position: fixed;
    background-color: rgba(48, 47, 47, 0.74);
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    z-index: 5;
    background-image: linear-gradient(to bottom right, pink, blue);
  }
  .text-screen {
    background-color: rgba(250, 247, 241, 0.623);
    width: 90vw;
    height: 50vh;
    margin: auto;
    margin-top: 20%;
    z-index: 10;
    border-radius: 50px;
    padding: 2%;
  } */
  /* .text-screen:before {
    filter: blur(10px);
  } */

</style>
