<script>
  import Bored from './Bored.svelte';
  import Modal from './Modal.svelte';
  import Navigation from './Navigation.svelte';

	// (/)kun ei haluta mitään tiettyä, rli random
	//
	let option ='?minaccessibility=0&maxaccessibility=0.5&participants=1';
  let modalVisible = true;
  let toggle = () => {
    modalVisible ? (modalVisible = false) : (modalVisible = true);
  };

  // const getToDo = async () => {
  //   const response = await fetch(`http://www.boredapi.com/api/activity/`);
	// 	return await response.json();
  // };

	const getToDoOption = async (option) => {
    const response = await fetch(`http://www.boredapi.com/api/activity${option}`);
		return await response.json();
  };

	let promise = getToDoOption(option);
	//https://svelte.dev/tutorial/await-blocks ja tuntiesimerkkejä
	//käytetty apuna/esimerkkinä asynkronisuutta vaativissa osoissa.

	const newIdea = () => {
	promise =	getToDoOption(option)
    }

</script>

<main>
  <Navigation />
  {#if modalVisible}
    <Modal />
  {:else}
  <Bored {promise} on:click={newIdea} />
	{/if}
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
