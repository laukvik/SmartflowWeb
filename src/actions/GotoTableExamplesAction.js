import {Action} from "smartflow";

export class GotoTableExamplesAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/examples/table"
    }
  }
}
