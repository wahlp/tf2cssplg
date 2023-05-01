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

    const data = parseNameIdPairs(inputText);
    dataStore.set(data);
    localStorage.setItem('inputText', inputText);
  }
</script>

<div class="w-4/5 h-[100vh]">
  <form on:submit|preventDefault={handleSubmit} class="flex flex-col items-center w-full h-full p-6 space-y-4">
    <h1>dump your console output here</h1>
    <textarea class="textarea p-3 h-full w-full resize-none font-mono" rows="24" spellcheck="false" bind:value={inputText} />
    <div class="w-full flex justify-between">
      <a href="{base}/examples" class="h-fit">See examples</a>
      <button class="btn btn-lg variant-filled-primary" type="submit">Submit</button>
    </div>
  </form>
</div>
