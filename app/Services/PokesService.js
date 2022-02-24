import { ProxyState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";
import { pokeApi } from "./AxiosService.js";

class PokesService {
  async getActivePoke(name) {
    const response = await pokeApi.get(name)
    console.log("getactivepoke", response.data);
    ProxyState.activePoke = new Poke(response.data)
  }
  // this is getting the data to display on the page by using get
  async getPokes() {
    const response = await pokeApi.get()
    // console.log("getPokes", response.data.results);
    ProxyState.pokes = response.data.results
  }
  constructor() {
    console.log("this is poke spells service");
  }

}

export const pokesserivce = new PokesService()