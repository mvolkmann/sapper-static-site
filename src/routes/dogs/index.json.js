// This is only used when the following line
// is in src/routes/dogs/index.svelte.
// const res = await this.fetch('dogs.json');

let lastId = 0;
const dogs = {};

function addDog(breed, name) {
  const dog = {id: ++lastId, breed, name};
  dogs[dog.id] = dog;
}

addDog('Whippet', 'Dasher');
addDog('Treeing Walker Coonhound', 'Maisey');
addDog('Native American Indian Dog', 'Ramsey');
addDog('German Shorthaired Pointer', 'Oscar Wilde');

export function get(req, res) {
  res.end(JSON.stringify(dogs));
}
