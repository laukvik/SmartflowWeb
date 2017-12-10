import {Action} from "smartflow";

export class GotoDocumentationAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/documentation"
    }
  }
}
