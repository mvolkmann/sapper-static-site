<script>
const DONUT_URL = 'http://donut-api.mit.edu/api/';

let donuts = [];

async function getDonuts() {
  try {
    const res = await fetch(DONUT_URL + 'list');
    const list = await res.json();
  } catch (e) {
    console.error('getDonuts error:', e);
  }
}


</script>

<svelte:head>
	<title>Donuts</title>
</svelte:head>

<form on:submit|preventDefault>
  <button on:click={getDonuts}>Get Donuts</button>

  <h2>Donuts</h2>
  {#each donuts as donut}
    <div>{donut}</div>
  {/each}
</form>
