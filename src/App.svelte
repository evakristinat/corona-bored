<script>
  import Random from './Random.svelte';
  import Options from './Options.svelte';
  import Browse from './Browse.svelte';
  // import Start from './Start.svelte';
  import Header from './Header.svelte';
  import customActivities from './store';

  import { Router, Link, Route } from 'svelte-routing';

  export let url = '';
  const header = 'corona-bored';

  // (/)kun ei haluta mitään tiettyä, eli random
  //
  let option = '?minaccessibility=0&maxaccessibility=0.5&participants=1';
  let modalVisible = true;
  let toggle = () => {
    modalVisible ? (modalVisible = false) : (modalVisible = true);
  };

  // const getToDo = async () => {
  //   const response = await fetch(`http://www.boredapi.com/api/activity/`);
  // 	return await response.json();
  // };

  const getToDoOption = async (option) => {
    const response = await fetch(
      `http://www.boredapi.com/api/activity${option}`
    );
    return await response.json();
  };

  const getMany = () => {
    let toDos = [];
    for (let i = 0; i < 6; i++) {
      const response = getToDoOption('');
      toDos = [...toDos, response];
    }
    Promise.all(toDos).then((data) => {
      customActivities.add(data);
      console.log($customActivities);
      return data;
    });
  };

  let activities = getMany();

  // customActivities.add
  // getMany();

  let promise = getToDoOption('');

  const newIdea = () => {
    promise = getToDoOption('');
  };
</script>

<main>
  <Router {url}>
    <Header {header}>
      <Link to="/" slot="1">Options</Link>
      <Link to="/random" slot="2">Random</Link>
      <Link to="/browse" slot="3">Browse</Link>
    </Header>

    <Route path="/"><Options /></Route>
    <Route path="/random"><Random {promise} on:new={newIdea} /></Route>
    <Route path="/browse"><Browse activities={$customActivities}/></Route>
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
