<script lang="ts">
  import { parseNameIdPairs } from './converter';
  import { sample, ugly } from './samples'
  import { naturalSort } from './util';

  let inputText = localStorage.getItem('inputText') || "";
  let outputData = [];
  let sortOrder: 'asc' | 'desc' = 'asc';
  let sortColumn: string = 'name';

  function handleInput(event) {
    inputText = event.target.value;
    localStorage.setItem('inputText', inputText);
  }

  function handleSubmit(event) {
    event.preventDefault();

    outputData = parseNameIdPairs(inputText);
    handleSort(sortColumn, false);
  }

  function loadExample(event, example: String) {
    event.preventDefault();

    if (example === 'nice') {
      inputText = sample;
    } else if (example === 'ugly') {
      inputText = ugly;
    }
  }

  function handleSort(column, enableInvert = true) {
    if (sortColumn === column) {
      if (enableInvert) 
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn = column;
      sortOrder = 'asc';
    }

    outputData = sortData(outputData, sortColumn, sortOrder);
  }

  function sortData(data, column, order) {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      const aVal = a[column];
      const bVal = b[column];

      if (order === 'asc') {
        return naturalSort(aVal, bVal);
      } else {
        return naturalSort(bVal, aVal);
      }
    });

    return sortedData;
  }
</script>

<div class="container">
  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <h1>dump your console output here</h1>
      <textarea class="input" spellcheck="false" bind:value={inputText} on:input={handleInput} />
      <div class="button-container">
        <button class="button button-example" on:click={() => loadExample(event, 'nice')}>Show me an example</button>
        <button class="button button-example" on:click={() => loadExample(event, 'ugly')}>Ugly example</button>
        <button class="button button-submit" type="submit">Submit</button>
      </div>
    </form>
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th 
            class="{
              sortColumn === 'name' 
              ? sortOrder === 'asc' 
                ? 'sorted-asc' 
                : 'sorted-desc'
              : undefined 
            }"
            on:click={() => handleSort('name')}
          >Name</th>
          <th 
            class="{
              sortColumn === 'ping' 
              ? sortOrder === 'asc' 
                ? 'sorted-asc' 
                : 'sorted-desc'
              : undefined 
            }"
            on:click={() => handleSort('ping')}
          >Ping</th>
          <th 
            class="{
              sortColumn === 'id3' 
              ? sortOrder === 'asc' 
                ? 'sorted-asc' 
                : 'sorted-desc'
              : undefined 
            }"
            on:click={() => handleSort('id3')}
          >ID3</th>
          <th 
            class="{
              sortColumn === 'url' 
              ? sortOrder === 'asc' 
                ? 'sorted-asc' 
                : 'sorted-desc'
              : undefined 
            }"
            on:click={() => handleSort('url')}
          >URL</th>
        </tr>
      </thead>
      <tbody>
        {#each outputData as { name, ping, id3, url }}
          <tr>
            <td>{name}</td>
            <td>{ping}</td>
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
    min-width: 60px;
  }

  th:nth-child(3), td:nth-child(3) {
    min-width: 130px;
  }

  th:nth-child(4), td:nth-child(4) {
    min-width: 500px;
  }

  th.sorted-asc::after {
    content: " ▲";
  }

  th.sorted-desc::after {
    content: " ▼";
  }

  th {
    background-color: #f2f2f2;
    user-select: none;
    cursor: pointer;
  }

  th:hover {
    background-color: #ddd;
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
    margin-right: 15px;
  }
</style>
