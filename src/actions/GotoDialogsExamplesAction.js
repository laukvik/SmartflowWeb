import {Action} from "smartflow";

export class GotoDialogsExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/dialogs"
    }
  }
}
