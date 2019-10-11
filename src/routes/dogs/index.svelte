<script context="module">
  export async function preload(page, session) {
    // page is an object with host, path, query, and params properties.
    // An example host value is "localhost:3000".
    // An example path value is "dogs".
    // session can be an object,
    // but is undefined with not using session data.

    try {
      // For separate Express server.
      //const res = await this.fetch('http://localhost:1919');
      const res = await this.fetch('dogs.json');
      if (res.ok) {
        const dogs = await res.json();
        return {dogs};
      } else {
        const msg = await res.text();
        this.error(res.statusCode, 'getDogs: ' + msg);
      }
    } catch (e) {
      this.error(500, 'getDogs error:', e);
    }
  }
</script>

<script>
  // The preload function above makes this available as a prop.
  export let dogs;
</script>

<svelte:head>
	<title>Dogs</title>
</svelte:head>

<h2>Dogs</h2>
{#each Object.values(dogs) as dog}
  <div>{dog.name} is a {dog.breed}</div>
{/each}
