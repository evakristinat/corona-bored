<script>
  import { Button } from 'svelte-mui';
  import { getContext } from 'svelte';

  //getContextin avulla activitytype päivittyy suoraan app-komponenttiin.
  const activityType = getContext('activityType');

  const active =
    'type=recreational&type=charity&type=music&type=diy&minaccessibility=0.5&maxaccessibility=1.0';
  const chill = 'type=cooking&type=relaxation&type=busywork&type=educational';
  const social = 'type=social';
</script>

<div class="container">
  <div class="buttongroup">
    <div>
      <Button
        id="chill"
        on:click={() => activityType(chill)}
        raised
        fullWidth
        color="rgb(250, 252, 246)"
      >
        <img src="../glass.png" alt="glass" width="50" />
        <label for="chill">CHILL </label>
      </Button>
    </div>

    <div>
      <Button
        id="active"
        on:click={() => activityType(active)}
        raised
        fullWidth
        color="rgb(250, 252, 246)"
      >
        <img src="../basketball.png" alt="basketball" width="40" />
        <label for="active"> ACTIVE </label>
      </Button>
    </div>

    <div>
      <Button
        id="social"
        on:click={() => activityType(social)}
        raised
        fullWidth
        color="rgb(250, 252, 246)"
      >
        <img src="../speakers.png" alt="speaker" width="40" />
        <label for="social"> SOCIAL </label>
      </Button>
    </div>
  </div>
</div>

<style>
  .container {
    width: 90%;
    max-width: 800px;
    margin: auto;
  }
  .buttongroup {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    margin: 0px;
    width: 100%;
    height: 50px;
    align-content: flex-end;
  }

  .buttongroup > div {
    width: 30%;
    min-height: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1%;
  }
  img {
    justify-self: left;
    margin: 0px;
    padding: 0px;
  }

  label {
    padding-right: 20px;
    padding-left: 1%;
  }

  @media (max-width: 600px) {
    label {
      padding-right: 0px;
    }
  }
  @media (max-width: 360px) {
    .buttongroup {
      display: flex;
      /* flex-direction: column; */
      justify-content: space-between;
      margin: auto;
      width: 90%;
      max-width: 800px;
      height: 50px;
      margin: auto;
      align-content: flex-end;
      background-color: white;
    }
    .buttongroup > div {
      max-width: 100px;
      min-width: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1%;
    }
  }
</style>
