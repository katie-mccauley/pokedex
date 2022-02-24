
import { MyPokesController } from "./Controllers/MyPokesController.js";
import { PokesController } from "./Controllers/PokesController.js";

class App {
  pokesController = new PokesController()
  mypokesController = new MyPokesController()
}

window["app"] = new App();
