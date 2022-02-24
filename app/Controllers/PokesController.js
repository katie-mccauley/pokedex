import { ProxyState } from "../AppState.js";
import { pokesserivce } from "../Services/PokesService.js";


async function _getPokes() {
  try {
    await pokesserivce.getPokes()
  } catch (error) {
    console.error(error)
  }
}

function _drawPokes() {
  let template = ""
  ProxyState.pokes.forEach(p => template += `<li class="selectable" onclick="app.pokesController.getActivePoke('${p.name}')">${p.name}</li>`)
  document.getElementById("pokelist").innerHTML = template
}

function _drawActivePokes() {

  document.getElementById("activePoke").innerHTML = ProxyState.activePoke.Template

}
export class PokesController {
  constructor() {
    console.log("this is poke spells controller");
    _getPokes()
    ProxyState.on("pokes", _drawPokes)
    ProxyState.on("activePoke", _drawActivePokes)
  }

  async getActivePoke(name) {
    try {
      console.log("this is name", name)
      pokesserivce.getActivePoke(name)
    } catch (error) {
      console.error(error)
    }

  }

}