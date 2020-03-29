import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayerComponent } from './single-player.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HighchartPlayerComponent } from './highchart-player/highchart-player.component';
import * as Highcharts from 'highcharts';
import {Player_attributes} from '../../models/player_attributes';
import {PlayersService} from '../../services/players.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('SinglePlayerComponent', () => {
  let component: SinglePlayerComponent;
  let fixture: ComponentFixture<SinglePlayerComponent>;
  let servicePlayer: PlayersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlayerComponent],
      imports: [RouterTestingModule],
      providers: [PlayersService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    servicePlayer = TestBed.get(PlayersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
