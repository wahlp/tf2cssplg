<script lang="ts">
  import type { NameIdMapping } from './converter';
  import { naturalSort } from './util';
  import { dataStore } from './stores.js'

  let sortOrder: 'asc' | 'desc' = 'asc';
  let sortColumn: string = 'name';

  let outputData: NameIdMapping[];
  
  dataStore.subscribe((value) => {
    outputData = value;
    handleSort(sortColumn, false);
  })

  function handleSort(column: string, enableInvert = true) {
      if (sortColumn === column) {
      if (enableInvert) 
          sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        sortColumn = column;
        sortOrder = 'asc';
      }

      outputData = sortData(outputData, sortColumn, sortOrder);
  }

  function sortData(data: NameIdMapping[], column: string, order: string) {
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

<style>
  .table-container {
    margin-left: 10px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #ddd;
    background-color: #333;
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
    background-color: #141414;
    user-select: none;
    cursor: pointer;
  }

  th:hover {
    background-color: #444444;
  }

  tr:nth-child(even) {
    background-color: #2b2b2b;
  }

  tr:hover {
    background-color: #444444;
  }

  .link-container {
    display: flex;
    align-items: center;
  }

  .link-container a {
    margin-right: 15px;
  }
</style>