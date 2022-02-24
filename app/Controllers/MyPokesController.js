import { ProxyState } from "../AppState.js";
import { mypokesservice } from "../Services/MyPokesService.js";


async function getMyPokes() {
  try {
    await mypokesservice.getMyPokes()
  } catch (error) {
    console.error(error)
  }
}

function _draw() {
  let template = ''
  ProxyState.myPokes.forEach(m => template += m.ListTemplate)
  document.getElementById("mine").innerHTML = template
}
export class MyPokesController {
  constructor() {
    console.log("this is my contoller");
    getMyPokes()
    ProxyState.on("myPokes", _draw)
  }

  async savePoke() {
    try {
      console.log("this is save poke controller")
      await mypokesservice.savePoke()
    } catch (error) {
      console.error(error)
    }
  }

  setActivePoke(name) {
    mypokesservice.setActivePoke(name)


  }
}