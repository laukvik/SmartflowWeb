import {View} from "smartflow";

import {FindMoviesAction} from "../actions/FindMoviesAction";
import {Card} from "smartflow";
import {BadgeShape, BadgeStyle, Button, ButtonSize, ButtonStyle, Outline} from "smartflow";
import {Items} from "smartflow";
import {Table} from "smartflow";
import {Photo} from "smartflow";
import {Duration} from "smartflow";


export class TableExamplesView extends View {

  constructor(properties) {
    super(properties);

    this.smartflow = {
      "path": "/examples/table",
      "components": [

        {
          "type": Table,
          "columns": [
            {
              "label": "Poster",
              "key": "title",
              "component": {
                "type": Photo,
                "url": "{posterurl}",
                "width": "100"
              }
            },
            {
              "label": "Title",
              "key": "title"
            },
            {
              "label": "Genre",
              "key": "genres"
            },
            {
              "label": "Duration",
              "key": "duration",
              "component": {
                "type": Duration,
                "value": "{duration}"
              }
            },
            {
              "label": "Year",
              "key": "year"
            }
          ],
          "items": "{global:movies}",
          "filter":
            {
              "match": "year",
              "type": "is",
              "value": "{view:selectedYear}"
            }
          ,
          "sort": {
            "match": "title",
            "order": "asc"
          },

        }

      ]
    };
  }

  viewInitialized() {
  }

}
