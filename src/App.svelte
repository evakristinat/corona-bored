<script>
  import Random from './Random.svelte';
  import Options from './Options.svelte';
  import Browse from './Browse.svelte';
  // import Start from './Start.svelte';
  import Header from './Header.svelte';
  import customActivities from './store';
  // import { navigate } from 'svelte-routing';

  import { Router, Link, Route } from 'svelte-routing';

  export let url = '';
  let type = '';
  const active = 'type=recreational&type=charity&type=music';
  const chill = 'type=cooking&type=relaxation&type=busywork&type=educational';
  const social = 'type=social';
  const header = 'corona-bored';
  let randomNumber;
  const getRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 4) + 2;
  };

  // (/)kun ei haluta mitään tiettyä, eli random
  //
  let options;
  // let modalVisible = true;
  // let toggle = () => {
  //   modalVisible ? (modalVisible = false) : (modalVisible = true);
  // };

  // const getToDo = async () => {
  //   const response = await fetch(`http://www.boredapi.com/api/activity/`);
  // 	return await response.json();
  // };

  const getToDoOption = async (option) => {
    const response = await fetch(
      `http://www.boredapi.com/api/activity?${option}`
    );
    return await response.json();
  };
  //virheenkäsittely

  const getMany = (type) => {
    let toDos = [];
    while (toDos.length < 6) {
      const option = getToDoOption(type);
      //syötetään uusia lupauksia taulukkoon
      console.log(option);
      toDos = [...toDos, option];
    }
    //luvataan kaikki taulukon lupaukset
    Promise.all(toDos).then((data) => {
      customActivities.add(data);
      console.log($customActivities);
      return data;
    });
  };

  //lifecycle on init
  $: activities = getMany(type);

  // customActivities.add
  // getMany();

  const promiseop = () => {
    if (options) {
      getRandomNumber();
      console.log(randomNumber)
      return getToDoOption(options);
    } else {
      return getToDoOption('');
    }
  };
  let promise = promiseop();

  const newIdea = () => {
    promise = promiseop();
  };

  const getOptions = (ce) => {
    getRandomNumber();
    const participants = ce.detail.social ? randomNumber : 1;
    options = `?minaccessibility=0&maxaccessibility=${ce.detail.activity}&participants=${participants}`;

    newIdea();
  };
</script>

<main>
  <Router {url}>
    <Header {header}>
      <Link to="/" slot="1">Options</Link>
      <Link to="/result" slot="2">Random</Link>
      <Link to="/browse" slot="3">Browse</Link>
    </Header>

    <Route path="/"><Options on:send={getOptions} /></Route>
    <Route path="result"><Random {promise} on:new={newIdea} /></Route>
    <Route path="browse"
      ><Browse
        activities={$customActivities}
        on:new={getMany}
        on:active={() => (type = active)}
        on:chill={() => (type = chill)}
        on:social={() => (type = social)}
      /></Route
    >
    <!-- <Route path="result" component={Result} /> -->
  </Router>
  <!-- {#if modalVisible}
    <Start on:yes={()=> console.log('yes')} on:no={()=> console.log('no')} on:ready={toggle} />
  {:else}
    <Random {promise} on:click={newIdea} />
  {/if} -->
</main>

<style>
  main {
    text-align: center;
    margin: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
