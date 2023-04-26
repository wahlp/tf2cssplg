<script lang="ts">
  import InputForm from "./InputForm.svelte";
  import Output from "./Output.svelte";
</script>

<div class="container">
  <InputForm />
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
