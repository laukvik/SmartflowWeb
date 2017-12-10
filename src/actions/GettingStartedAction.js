import {Action} from "smartflow";

export class GettingStartedAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "path": "/gettingstarted"
    }
  }
}
