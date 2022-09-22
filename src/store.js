import { Store } from 'svelte/store.js';

function randomPersonNumber() {
  const MIN = 1;
  const MAX = 83;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

class SWApi extends Store {
  addCharacter(data) {
    const newCharacter = { ...data, addAt: new Date() };
    const characters = this.get().characters.concat(newCharacter);
    this.set({ characters });
  }

  getCharacterById(id) {
    const character = this.get().characters.filter(c => c.characterId === id);
    return character[0];
  }

  generateRandomCharacterId() {
    const randomId = randomPersonNumber();
    this.set({ selectedCharacterId: randomId });
    return randomId;
  }

  addPlanete(data) {
    const newPlanete = { ...data, id: data.url };
    const planets = this.get().planets.concat(newPlanete);
    this.set({ planets });
  }

  setCharacterPlanet(planet) {
    this.set({ selectedCharacterPlanet: planet });
  }

  getPlanetById(url) {
    const planet = this.get().planets.filter(p => p.id === url);
    return planet[0] || {};
  }
}

export const INITIAL_DATA = {
  selectedCharacterId: '',
  selectedCharacterPlanet: {},
  characters: [],
  planets: [],
};

const store = new SWApi(INITIAL_DATA);

if (__DEV__) {
  window.__store__ = store;
}

export default store;
