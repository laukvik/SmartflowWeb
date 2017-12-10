import {Action} from "smartflow";



export class OpenAlertAction extends Action {

    constructor(){
        super();
    }


  getSmartflow() {
    return {
      "global": {
        "dialogAlertOpen": true
      }
    }
  }
}

export class CloseAlertDialogAction extends Action {
    constructor(){
        super();
    }

  getSmartflow() {
    return {
      "global": {
        "dialogAlertOpen": false
      }
    }
  }
}
