import {View} from "smartflow";
import {Navbar, NavbarBackground, NavbarColor, NavbarPlacement} from "smartflow";
import {GotoPresentationExamplesAction} from "../actions/GotoPresentationActionExamples";
import {GotoInputExamplesAction} from "../actions/GotoInputExamplesAction";
import {GotoTableExamplesAction} from "../actions/GotoTableExamplesAction";
import {GotoItemsExamplesAction} from "../actions/GotoItemsExamplesAction";
import {GotoProgressExamplesAction} from "../actions/GotoProgressExamplesAction";
import {GotoDialogsExamplesAction} from "../actions/GotoDialogsExamplesAction";
import {GotoButtonExamplesAction} from "../actions/GotoButtonExamplesAction";
import {GettingStartedAction} from "../actions/GettingStartedAction";

/**
 * Toolbar with links to index, catalog, posters and a add movie button
 *
 */
export class NavigationView extends View {

  constructor() {
    super();

    this.smartflow = {
      "components": [
        {
          "type": Navbar,
          "title": "Smartflow",
          "background": NavbarBackground.DARK,
          "color": NavbarColor.LIGHT,
          "buttons": [
            {
              "label": "Getting started",
              "action": GettingStartedAction
            },
            {
              "label": "Input",
              "action": GotoInputExamplesAction
            },
            {
              "label": "Presentation",
              "action": GotoPresentationExamplesAction
            },
            {
              "label": "Table",
              "action": GotoTableExamplesAction
            },
            {
              "label": "Items",
              "action": GotoItemsExamplesAction
            },
            {
              "label": "Progress",
              "action": GotoProgressExamplesAction
            },
            {
              "label": "Dialogs",
              "action": GotoDialogsExamplesAction
            },
            {
              "label": "Buttons",
              "action": GotoButtonExamplesAction
            },
          ]
        }
      ]
    };
  }

}
