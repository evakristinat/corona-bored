<script>

import { createEventDispatcher } from 'svelte';

  // import Modal from './Modal.svelte';

  import { Button, Dialog } from 'svelte-mui';

  const dispatch = createEventDispatcher();

</script>

<Dialog width="600" >
     <h4 slot="title">welcome</h4>

         <p>
    During the pandemic a lot of us live with restrictions, so let's first find
    out what's possible for you.
  </p>

  <div slot="footer">
    <Button on:click >Give me something to do!</Button>
  </div>
  <!-- </Modal> -->
</Dialog>

<style>
  input {
    display: block;
    margin: auto;
    width: 60vw;
    margin-top: 2%;
  }
</style>
