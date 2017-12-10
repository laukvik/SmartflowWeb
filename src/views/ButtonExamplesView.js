import {View} from "smartflow";
import {BadgeShape, BadgeStyle, Button, ButtonSize, ButtonStyle, Outline} from "smartflow";
import {Toolbar} from "smartflow";


export class ButtonExamplesView extends View {

  constructor(properties) {
    super(properties);

    this.smartflow = {
      "path": "/examples/buttons",
      "components": [

        {
          "type": Toolbar,
          "label": "Send",
          "buttons": [
            {
              "type": Button,
              "label": "Primary",
              "buttonStyle": ButtonStyle.PRIMARY,
              "badge": 12
            },
            {
              "type": Button,
              "label": "Secondary",
              "buttonStyle": ButtonStyle.SECONDARY,
              "badge": 13,
              "badgeStyle": BadgeStyle.DANGER,
              "badgeShape": BadgeShape.ROUND
            },
            {
              "type": Button,
              "label": "Warning",
              "buttonStyle": ButtonStyle.WARNING,
              "badge": 13,
              "outline": Outline.DANGER
            },
            {
              "type": Button,
              "label": "Danger",
              "buttonStyle": ButtonStyle.DANGER,
              "active": true
            },
            {
              "type": Button,
              "label": "Success",
              "buttonStyle": ButtonStyle.SUCCESS,
            },
            {
              "type": Button,
              "label": "Disabled",
              "enabled": false,
            },
          ]
        },

        {
          "type": Button,
          "label": "Small",
          "buttonStyle": ButtonStyle.DEFAULT,
          "size": ButtonSize.SMALL
        },
        {
          "type": Button,
          "label": "Default",
          "buttonStyle": ButtonStyle.DEFAULT,
          "size": ButtonSize.DEFAULT
        },
        {
          "type": Button,
          "label": "Large",
          "buttonStyle": ButtonStyle.DEFAULT,
          "size": ButtonSize.LARGE
        },
      ]
    };
  }

  pathChanged() {
  }
  actionPerformed() {
  }
}
