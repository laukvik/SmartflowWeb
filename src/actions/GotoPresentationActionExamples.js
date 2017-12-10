import {Action} from "smartflow";

export class GotoPresentationExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/presentation"
    }
  }
}
