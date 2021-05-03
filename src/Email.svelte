<script>
  import { Textfield, Checkbox } from 'svelte-mui';
  import { Button } from 'svelte-mui';
  import { fly, fade, slide } from 'svelte/transition';
  import { getContext } from 'svelte';
  import timer from './timer';

  export let selectedToDo;

  let email = '';
  let show = false;
  let state;

  const backHome = getContext('backHome');

  $: checked = false;
  $: valid = email.length > 5 && dotCorrect && symbolCorrect;
  $: dotCorrect =
    email.charAt(email.length - 4) === '.' || email.charAt(-5) === '.';
  $: symbolCorrect = email.search('@') !== -1;
  $: if ($timer === 0) {
    backHome();
  }

  const done = () => {
    show = true;
    timer.set(0);
  };
</script>

<section transition:slide>
  <h2>
    Great! Go {selectedToDo} and come back for more suggestions if you're still bored
  </h2>
  <h3>Get daily suggestions!</h3>
  <p>Receive daily suggestions on what to do and never be bored again.</p>

  {#if !checked}
    <div class="checkbox" out:fade={{ delay: 650 }}>
      <Checkbox bind:checked
        ><p>I would like to receive suggestions</p></Checkbox
      >
    </div>
  {:else}
    <div
      class="emailInput"
      transition:fly={{ y: 100, duration: 800, delay: 1000 }}
    >
      <Textfield
        label="email"
        type="email"
        on:blur={() => (state = 'visited')}
        bind:value={email}
        message="this is a demo. nothing will happen"
      />
      <span class="submit-button">
        <Button on:click={done} disabled={!valid} raised color dense
          >submit</Button
        >
      </span>
    </div>
    {#if state === 'visited' && !valid}
      <p class="error">please fill in your email</p>
    {/if}

    {#if show}
      <p>Thank you. Your suggestions will be sent to {email}.</p>
      <p>
        You will be transported back to the homepage in {$timer.toFixed(0)} seconds.
      </p>
    {/if}
  {/if}
</section>

<style>
  section {
    width: 100%;
    margin: auto;
    height: 100%;
  }

  h2 {
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 400;
    padding: 90px 100px 190px;
    margin: 0;
  }

  /* h3{

  } */

  .emailInput {
    display: flex;
    align-items: center;
  }
  .checkbox {
    margin: auto;
    width: 300px;
  }

  .submit-button {
    margin: 2%;
  }

  .error {
    color: darkred;
    font-size: 0.9em;
  }

  @media (max-width: 400px) {
    section {
      width: 90%;
    }
    h2 {
      padding: 15% 2%;
    }
  }
</style>
