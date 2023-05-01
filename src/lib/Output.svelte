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
      const aVal = a[column as keyof NameIdMapping];
      const bVal = b[column as keyof NameIdMapping];

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
  <table class="table table-hover table-compact">
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
          <td class="table-cell-fit">{name}</td>
          <td class="table-cell-fit">{ping}</td>
          <td class="table-cell-fit">{id3}</td>
          <td class="table-cell-fit">
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
  th.sorted-asc::after {
    content: " ▲";
  }

  th.sorted-desc::after {
    content: " ▼";
  }

  th { @apply select-none; }
</style>