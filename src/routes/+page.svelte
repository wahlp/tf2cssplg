<svelte:head>
    <title>tf2cssplg2</title>
</svelte:head>

<script>
    import InputForm from "$lib/InputForm.svelte";
    import Output from "$lib/Output.svelte";
</script>

<div class="flex flex-row justify-between items-start w-full">
  <InputForm />
  <Output />
</div>