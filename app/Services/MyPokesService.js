import { ProxyState } from "../AppState.js"
import { Poke } from "../Models/Poke.js"
import { myApi } from "./AxiosService.js"

class MyPokesService {
  setActivePoke(name) {
    let poke = ProxyState.myPokes.find(p => p.name == name)
    ProxyState.activePoke = poke
  }
  async getMyPokes() {
    const res = await myApi.get()
    ProxyState.myPokes = res.data.map(d => new Poke(d))
  }
  async savePoke() {
    let poke = ProxyState.activePoke
    const res = await myApi.post("", poke)
    console.log(res.data)
    ProxyState.myPokes = [...ProxyState.myPokes, new Poke(res.data)]
  }

}

export const mypokesservice = new MyPokesService()