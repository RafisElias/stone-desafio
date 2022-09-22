import store from '../store.js';

const BASE_URL = 'https://swapi.dev/api';

function randomPersonNumber() {
  const MIN = 1;
  const MAX = 83;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

export async function getRandomStarWarsCharacter() {
  const randomId = randomPersonNumber();
  const hasDuplicateCharacter = store
    .get()
    .characters.some(c => c.characterId === randomId);

  if (hasDuplicateCharacter) {
    return { result: store.getCharacterById(randomId), error: null };
  }
  try {
    const response = await fetch(`${BASE_URL}/people/${randomId}`);
    const result = await response.json();
    store.addCharacter({
      ...result,
      characterId: randomId,
    });
    return { result, error: null };
  } catch (error) {
    return { result: [], error: 'Tivemos um problema' };
  }
}

export async function getStarWarsCharacterById(id) {
  const hasDuplicateCharacter = store
    .get()
    .characters.filter(c => c.characterId === id);

  if (hasDuplicateCharacter.length > 0) {
    return { result: store.getCharacterById(id), error: null };
  }
  try {
    const response = await fetch(`${BASE_URL}/people/${id}`);
    const result = await response.json();
    store.addCharacter({
      ...result,
      characterId: id,
    });
    return { result, error: null };
  } catch (err) {
    return { result: {}, error: 'Tivemos um problema' };
  }
}

export async function getCharacterHomeworld(url) {
  const hasDuplicateHomeworld = store
    .get()
    .planets.filter(planet => planet.id === url);

  if (hasDuplicateHomeworld.length > 0) {
    store.setCharacterPlanet(hasDuplicateHomeworld[0]);
    return { result: hasDuplicateHomeworld[0] };
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    store.addPlanete(result);
    store.setCharacterPlanet(result);
    return { result };
  } catch (error) {
    throw error;
  }
}
