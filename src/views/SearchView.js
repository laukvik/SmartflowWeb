import {View} from "smartflow";
import {Searchfield} from "smartflow";
import {GotoMovieAction} from "../actions/GotoMovieAction";
import {FindMoviesAction} from "../actions/FindMoviesAction";
import {Card} from "smartflow";
import {BadgeShape, BadgeStyle, Button, ButtonSize, ButtonStyle, Outline} from "smartflow";
import {Alert, AlertStyle} from "smartflow";
import {Textfield, TextfieldType} from "smartflow";
import {Radio} from "smartflow";
import {Checkbox} from "smartflow";
import {Pulldown} from "smartflow";
import {NumberField} from "smartflow";
import {Datepicker} from "smartflow";

export class SearchView extends View {

  constructor(properties) {
    super(properties);

    this.smartflow = {
      "path": "/",
      "components": [
        {
          "type": Searchfield,
          "label": "Search",
          "placeholder": "Search movies",
          "help": "Find your favorite movie by typing the first letter",
          "itemKey": "title",
          "itemLabel": "title",
          "items": "{global:movies}"
        }
      ]
    };
  }

  viewInitialized() {
    this.runAction(new FindMoviesAction());
  }

}
