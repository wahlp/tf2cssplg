<script lang="ts">
  import { base } from "$app/paths";
  import { parseNameIdPairs } from './converter';
  import { dataStore } from './stores.js'
  
  let inputText = checkLocalStorage();

  function checkLocalStorage() {
    if (typeof window !== "undefined") {
      const text = localStorage.getItem('inputText');
      if (typeof text === "string") {
        return text;
      }
    }
    return "";
  }

  function handleSubmit(event: Event) {
    event.preventDefault();

    dataStore.set(parseNameIdPairs(inputText));
    localStorage.setItem('inputText', inputText);
  }
</script>

<div class="form-container">
  <form on:submit|preventDefault={handleSubmit}>
    <h1>dump your console output here</h1>
    <textarea class="input" spellcheck="false" bind:value={inputText} />
    <div class="button-container">
      <a href="{base}/examples" class="examples-link">See examples</a>
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
    background-color: #262626;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
  }

  .input {
    width: 100%;
    height: 700px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;
    resize: none;
    font-family: monospace;
    background-color: #333;
    color: inherit;
  }

  .button-container {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .examples-link {
    color: rgb(0, 128, 255);
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
    background-color: #419744;
  }
  .button-submit:hover {
    background-color: #48a54b;
  }
</style>
