import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
  })

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'angularBI'`, () => {
    expect(appComponent.title).toEqual('angularBI');
  });
});
