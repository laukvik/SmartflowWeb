import {Action} from "smartflow";

export class GotoInputExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/input"
    }
  }
}
