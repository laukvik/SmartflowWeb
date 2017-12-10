import {View, Progress, ProgressbarStyle} from "smartflow";

export class ProgressExamplesView extends View {

  constructor(properties) {
    super(properties);

    this.smartflow = {
      "path": "/examples/progress",
      "components": [
        {
          "type": Progress,
          "value": 30,
          "progressbarStyle": ProgressbarStyle.DANGER,
          "animated": true,
          "striped": true
        }
      ]
    };
  }

  viewInitialized() {
  }

}
