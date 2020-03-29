import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
