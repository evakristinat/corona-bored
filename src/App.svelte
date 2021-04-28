<script>
  import Random from './Random.svelte';
  import Options from './Options.svelte';
  import Browse from './Browse.svelte';
  // import Start from './Start.svelte';
  import Header from './Header.svelte';
  import customActivities from './activities';
  // import { navigate } from 'svelte-routing';
  import Email from './Email.svelte';

  import { Router, Link, Route, navigate } from 'svelte-routing';
  import { onMount } from 'svelte';

  export let url = '';
  const header = 'corona-bored';


  //active, chill ja social antavat arvot Categories-komponentin vaihtoehdoille.
  const active = 'type=recreational&type=charity&type=music';
  const chill = 'type=cooking&type=relaxation&type=busywork&type=educational';
  const social = 'type=social';
  //activityTypeen sijoitetaan valittu tyyppi (active,chill,social)
  let activityType;
//selected saa arvon kun käyttäjä valitsee ehdotuksen Random-komponentissa.
//tieto välitetään sitten Email-komponentille näytettäväksi.
  let selected;
  //randomNumber kertoo funktiolle
  let randomNumber;
  const getRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 4) + 2;
  };

  let options = '';

  const getToDoOption = async (option) => {
    const response = await fetch(
      `http://www.boredapi.com/api/activity?${option}`
    );
    return await response.json();
  };

  const getMany = async (type) => {
    let toDos = [];
    while (toDos.length < 6) {
      const option = getToDoOption(type);
      //syötetään uusia lupauksia taulukkoon
      toDos = [...toDos, option];
    }
    //luvataan kaikki taulukon lupaukset
    Promise.all(toDos)
      .then((data) => {
        customActivities.add(data);
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  $: getMany(activityType);

  let promiseOptions = getToDoOption('');

  const getOptions = (ce) => {
    getRandomNumber();
    const participants = ce.detail.social ? randomNumber : 1;
    options = `minaccessibility=0&maxaccessibility=${ce.detail.activity}&participants=${participants}`;
    promiseOptions = getToDoOption(options);
    navigate('result');
  };
  //alkuarvo random-ehdotukselle. Tämän vuoksi ei ole tarpeen käyttää onMount
  let promise;

  onMount(() => (promise = getToDoOption('')));

  //päivittää ehdotuksen valinnoilla. Käytössä Options-komponentin läpikäymisen jälkeen.
  const promiseop = () => {
    getRandomNumber();
    promiseOptions = getToDoOption(options);
  };

  //päivittää random-ehdotuksen
  const newIdea = () => {
    promise = getToDoOption('');
  };

  //hakee hyväksytyn tekemisehdotuksen ja asettaa sen selected muuttujaan, joka välitetään Email-komponentille.
  const getSelected = (ce) => {
    console.log(ce.detail.innerText);
    selected = ce.detail.innerText;
    navigate('email');
  };
</script>

<!--LISÄÄ MAIN OSIO-->
<div id="app">
  <!--Router-osion pohja täältä: https://www.npmjs.com/package/svelte-routing -->
  <Router {url}>
    <Header {header}>
      <Link to="/" slot="1">Options</Link>
      <Link to="/random" slot="2">Random</Link>
      <Link to="/browse" slot="3">Browse</Link>
    </Header>

    <Route path="/"><Options on:send={getOptions} /></Route>
    <Route path="random"
      ><Random {promise} on:new={newIdea} on:ok={getSelected} /></Route
    >
    <Route path="result"
      ><Random
        promise={promiseOptions}
        on:new={promiseop}
        on:ok={getSelected}
      /></Route
    >
    <Route path="browse"
      ><Browse
        activities={$customActivities}
        on:new={getMany}
        on:active={() => (activityType = active)}
        on:chill={() => (activityType = chill)}
        on:social={() => (activityType = social)}
      /></Route
    >

    <Route path="email"><Email selectedToDo={selected} /></Route>
    <!-- <Route path="result" component={Result} /> -->
  </Router>
  <!-- {#if modalVisible}
    <Start on:yes={()=> console.log('yes')} on:no={()=> console.log('no')} on:ready={toggle} />
  {:else}
    <Random {promise} on:click={newIdea} />
  {/if} -->
</div>

<style>
  #app {
    text-align: center;
    margin: 0;
  }

  @media (min-width: 640px) {
    #app {
      max-width: none;
    }
  }
</style>
