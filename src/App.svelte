<script lang="ts">
  import Formatter from "./Formatter.svelte";
  import Output from "./Output.svelte";
</script>

<div class="container">
  <Formatter />
  <Output />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
  }
</style>
