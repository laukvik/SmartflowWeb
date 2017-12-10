import {Action} from "smartflow";

export class GotoItemsExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/items"
    }
  }
}
