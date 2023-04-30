<svelte:head>
    <title>tf2cssplg2</title>
</svelte:head>

<script>
    import InputForm from "$lib/InputForm.svelte";
    import Output from "$lib/Output.svelte";
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
}
</style>
