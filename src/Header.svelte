<script>
  export let header = 'Header';
</script>

<div>
  <header>
    <h1><slot name="header">{header}</slot></h1>

    <nav>
      <ul>
        <li><slot name="1" /></li>
        <li><slot name="2" /></li>
        <li><slot name="3" /></li>
      </ul>
    </nav>
  </header>
</div>

<style>
  header {
    display: flex;
    margin: 0;
    padding-left: 3vw;
    padding-bottom: 2vh;
    padding-top: 1vh;
    background-color: rgb(209, 226, 209);
    color: white;
  }
  ul {
    list-style: none;
  }
  li{
    font-size: 1em;
    padding: 1vh;
  }

</style>
