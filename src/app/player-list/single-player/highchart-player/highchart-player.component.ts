import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Player_attributes} from '../../../models/player_attributes';
import {isNullOrUndefined} from 'util';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-highchart-player',
  templateUrl: './highchart-player.component.html',
  styleUrls: ['./highchart-player.component.scss']
})
export class HighchartPlayerComponent implements OnInit {

  @Input() attributes: Player_attributes;
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      polar: true,
      type: 'line'
    },

    title: {
      text: ''
    },

    pane: {
      size: '85%'
    },

    xAxis: {
      categories: ['TIR', 'PASSE', 'VIT', 'DEF',
        'MENTAL'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },

    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    series: [],

  };

  constructor() {

  }

  ngOnInit() {
    if (!isNullOrUndefined(this.attributes)) {
      this.calculAttributs();
    }
  }

  calculAttributs() {
    const tir = Math.floor((this.attributes.shot_power + this.attributes.long_shots + this.attributes.curve + this.attributes.heading_accuracy + this.attributes.volleys) / 5);
    const passe = Math.floor((this.attributes.short_passing + this.attributes.long_passing) / 2);
    const vit = Math.floor((this.attributes.sprint_speed + this.attributes.acceleration) / 2);
    const def = Math.floor((this.attributes.sliding_tackle + this.attributes.standing_tackle + this.attributes.marking) / 3);
    const mental = Math.floor((this.attributes.aggression + this.attributes.positioning + this.attributes.interceptions + this.attributes.vision) / 4);

    const options = {
      name: 'Note',
      data: [
        tir,
        passe,
        vit,
        def,
        mental
      ],
      pointPlacement: 'on'
    };
    this.chartOptions.series.push(options);
  }

}
