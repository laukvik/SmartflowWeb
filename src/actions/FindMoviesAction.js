import {Action} from "smartflow";

export class FindMoviesAction extends Action {

  constructor(){
    super();
  }

  getSmartflow() {
    return {
      "request": {
        "url": "posters.json",
        "method": "get",
        "type": "json"
      },
      "success": {
        "global": "movies",
      },
      "error": {
        "global": "moviesFailed"
      }
    }
  }
}
