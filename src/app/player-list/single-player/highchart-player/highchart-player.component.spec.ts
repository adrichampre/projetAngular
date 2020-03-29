import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartPlayerComponent } from './highchart-player.component';
import * as Highcharts from 'highcharts';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('HighchartPlayerComponent', () => {
  let component: HighchartPlayerComponent;
  let fixture: ComponentFixture<HighchartPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartPlayerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
