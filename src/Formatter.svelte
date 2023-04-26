<script lang="ts">
  import { parseNameIdPairs } from './converter';
  import { sample, ugly } from './samples'
  import { dataStore } from './stores.js'

  let inputText = localStorage.getItem('inputText') || "";

  function handleSubmit(event) {
    event.preventDefault();

    dataStore.set(parseNameIdPairs(inputText));
    localStorage.setItem('inputText', inputText);
  }

  function loadExample(event, example: string) {
    event.preventDefault();

    if (example === 'nice') {
      inputText = sample;
    } else if (example === 'ugly') {
      inputText = ugly;
    }
  }
</script>

<div class="form-container">
  <form on:submit|preventDefault={handleSubmit}>
    <h1>dump your console output here</h1>
    <textarea class="input" spellcheck="false" bind:value={inputText} />
    <div class="button-container">
      <button class="button button-example" on:click={() => loadExample(event, 'nice')}>Show me an example</button>
      <button class="button button-example" on:click={() => loadExample(event, 'ugly')}>Ugly example</button>
      <button class="button button-submit" type="submit">Submit</button>
    </div>
  </form>
</div>

<style>

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    height: 100%;
  }

  .input {
    width: 100%;
    height: 600px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;
    resize: none;
    font-family: monospace;
  }

  .button-container {
    height: 60px;
  }

  .button {
    height: 100%;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .button-submit {
    width: 180px;
    background-color: #4caf50;
  }
  .button-submit:hover {
    background-color: #3e8e41;
  }

  .button-example {
    width: 200px;
    background-color: #3399cc;
  }
  .button-example:nth-child(2) {
    margin-right: 200px;
  }

  .button-example:hover {
    background-color: #2d85b1;
  }
</style>
