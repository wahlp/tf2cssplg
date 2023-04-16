<!-- App.svelte -->
<script lang="ts">
  import { parseNameIdPairs } from './converter';

  let inputText = localStorage.getItem('inputText') || "";
  let outputData = [];

  function handleInput(event) {
    inputText = event.target.value;
    localStorage.setItem('inputText', inputText);
  }

  function handleSubmit(event) {
    event.preventDefault();

    outputData = parseNameIdPairs(inputText);
  }
</script>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <h1>dump your console output here</h1>
    <textarea class="input" spellcheck="false" bind:value={inputText} on:input={handleInput} />
    <button class="button" type="submit">Submit</button>
  </form>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID3</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {#each outputData as { name, id3, url }}
          <tr>
            <td>{name}</td>
            <td>{id3}</td>
            <td>
              <div class="link-container">
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
  }

  .table-container {
    margin-left: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
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

  .button {
    width: 100%;
    height: 50px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .button:hover {
    background-color: #3e8e41;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  th,
  td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  th:nth-child(1), td:nth-child(1) {
    min-width: 250px;
  }

  th:nth-child(2), td:nth-child(2) {
    min-width: 150px;
  }

  th:nth-child(3), td:nth-child(3) {
    min-width: 500px;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f8f8f8;
  }

  tr:hover {
    background-color: #f2f2f2;
  }

  .link-container {
    display: flex;
    align-items: center;
  }

  .link-container a {
    /* flex-grow: 1; */
    margin-right: 15px;
  }
</style>
