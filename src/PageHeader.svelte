<script>
  export let pageName = 'Page name';
</script>

<header class="headers">

  <slot name="eyebrowHeader">
    <p>{pageName.toUpperCase()}</p>
  </slot>
  <slot name="pageHeader">
    <h2>Page header slot</h2>
  </slot>
  <slot name="info">
    <p>info slot - this tells you what happens here</p>
  </slot>
</header>

<style>
  .headers {
    text-align: left;
    padding-left: 3vw;
    padding-bottom: 3vh;
  }
</style>
