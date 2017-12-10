import {Action} from "smartflow";

export class GotoButtonExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/buttons"
    }
  }
}
