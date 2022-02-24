export class Poke {
  constructor(data) {
    this.name = data.name || ""
    this.nickName = data.nickName || ""
    this.img = data.img || data.sprites.back_default
    this.weight = data.weight || ""
    this.height = data.height || ""
    this.types = data.types || data.types.join('')
  }



  get Template() {
    return `
    <div class="bg-light shadow p-4">
      <div class="text-center">
        <h2>${this.name}</h2>
        <img class="img-fluid" src=${this.img}>
        <h4> ${this.weight} | ${this.height}| </h4>
        <p class="text-start">${this.nickName}</p>
        <div class="d-flex justify-content-between align-items-baseline" onclick="app.mypokesController.savePoke('${this.name}')">
          Save
        </div>
      </div>
    </div>`
  }

  get ListTemplate() {
    return `
    <div class="rounded  p-2">
        <b class="text-center w-100">${this.name}</b><br/>
        <input type="checkbox" onclick="app.mySpellsController.prepareSpell('${this.name}')">
        <button class="btn selectable" onclick="app.mypokesController.setActivePoke('${this.name}')"> see details</button>
      <div class="border border-light mt-2"></div>
    </div>`
  }
}