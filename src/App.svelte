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

  export let url = '';
  let activityType;
  const active = 'type=recreational&type=charity&type=music';
  const chill = 'type=cooking&type=relaxation&type=busywork&type=educational';
  const social = 'type=social';
  const header = 'corona-bored';
  let randomNumber;
  const getRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 4) + 2;
  };

  let options = '';

  const getToDoOption = async (option) => {
    const response = await fetch(
      `https://www.boredapi.com/api/activity?${option}`
    );
    return await response.json();
    }

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
        return data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  $: getMany(activityType);

  const getOptions = (ce) => {
    getRandomNumber();
    const participants = ce.detail.social ? randomNumber : 1;
    options = `?minaccessibility=0&maxaccessibility=${ce.detail.activity}&participants=${participants}`;
    navigate('result');
    newIdea();
  };

  // const promiseop = () => {
  //   getRandomNumber();
  //   return getToDoOption(options);

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
  }
  //   if (options) {
  //     promiseop()
  //   } else {
  //     getToDoOption();
  //   }
  // };

  const refresh=()=>{
    
  }

</script>

 <!--LISÄÄ MAIN OSIO-->
<div id="app">
  <Router {url}>
    <Header {header}>
      <Link to="/" slot="1">Options</Link>
      <Link to="/random" slot="2" on:click={refresh}>Random</Link>
      <Link to="/browse" slot="3">Browse</Link>
    </Header>

    <Route path="/"><Options on:send={getOptions} /></Route>
    <Route path="random"
      ><Random
        promise={promise}
        on:new={newIdea}
        on:ok={() => navigate('email')}
      /></Route
    >
    <Route path="result"
      ><Random
        promise={promise}
        on:new={newIdea}
        on:ok={() => navigate('email')}
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

    <Route path="email"><Email /></Route>
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
