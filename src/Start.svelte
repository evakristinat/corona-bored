<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  import { Button } from 'svelte-mui';

  const dispatch = createEventDispatcher();
</script>

<div class="container" transition:slide={{ duration: 900 }}>
  <div class="welcome">
    <h1>welcome</h1>
    <h2>
      During the pandemic figuring out what to do isn't always easy but by answering a few questions we can find you something to do
    </h2>

    <div class="cta">
      <Button on:click={() => dispatch('options')} raised color="white"
        >Get something to do!</Button
      >
    </div>
  </div>

  <div class="content">
    <h3>If you're up for anything try random or browse!</h3>
    <!-- Random gives you
    , while in browse you can
    select the type of activity that you're interested in and browse the
    options until you find the right thing for you to do. -->
    <div class="flexbox">
      <div id="browse" on:click={() => dispatch('browse')}>
        <h2>BROWSE</h2>
        <p>
          Browse on suggestions of different categories and decide for yourself
        </p>
      </div>
      <div id="random" on:click={() => dispatch('random')}>
        <h2>RANDOM</h2>
        <p>Get random suggestions on what to do until you find what you want</p>
      </div>
    </div>
  </div>
</div>

<!-- </Dialog> -->
<style>
  /* input {
    display: block;
    margin: auto;
    width: 60vw;
    margin-top: 2%;
  } */

  .container {
    height: 100%;
  }

  .welcome {
    background-color: rgba(199, 212, 124, 0.438);
    padding: 2%;
    box-shadow: -2px 5px 15px -7px rgba(83, 83, 83, 0.32);
  }

  h1 {
    margin: 0px;
    padding-top: 3vh;
    padding-bottom: 2vh;
  }

  .welcome > h2 {
    font-weight: 400;
    max-width: 800px;
    margin: auto;
  } h3{
    width: 90%;
    padding-top: 4vh;
    margin: auto;
    font-size: 1.7em;
    font-weight: 500;
  }

  #browse > h2,
  #random > h2 {
    background-color: rgb(255, 255, 255);
    width: 100%;
    padding: 7% 0% 6%;
    margin: 0;
  }

  p {
    padding-top: 2vh;
    font-weight: 500;
    font-size: 1.4em;
    margin: auto;
    width: 90%;
  }

  .cta {
    margin-top: 4vh;
    margin-bottom: 4vh;
  }

  .flexbox {
    display: flex;
    width: 90%;
    max-width: 800px;
    margin: auto;
    padding: 5%;
    width: 80%;
    height: 25vh;
    justify-content: space-around;
  }

  .flexbox > div {
    outline: solid 1px rgba(141, 140, 140, 0.048);
    margin: 2%;
    box-shadow: -2px 5px 15px -7px rgba(83, 83, 83, 0.32);
    transition: 0.9s;
    border-radius: 3px;
    cursor: pointer;
  }

  .flexbox > div:hover {
    box-shadow: -2px 5px 15px -1px rgba(83, 83, 83, 0.32);
  }

  #browse {
    background-color: rgba(224, 224, 224, 0.438);
  }

  #random {
    background-color: rgba(183, 105, 255, 0.123);
  }

  @media (max-width: 400px) {
    .content {
      padding-top: 5vh;
      width: 90%;
      height: 100%;
      margin: auto;
    }

    .welcome {
      padding-bottom: 2vh;
    }
    h1 {
      font-size: 1.2em;
      padding: 6%;
      margin-bottom: 0;
    }

    h2 {
      padding: 0;
      margin: auto;
      font-size: 1em;
      width: 90%;
      font-weight: 600;
    }

    .flexbox {
      width: 100%;
      height: 30%;
      margin-top: 4vh;
      padding: 0;
      margin-left:0;
      margin-right: 0;
    }
    #browse > p,
    #random > p {
      font-size: 0.9em;
      padding: 6% 5%;
    }
  }
</style>
