import {Action} from "smartflow";

export class GotoProgressExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/progress"
    }
  }
}
