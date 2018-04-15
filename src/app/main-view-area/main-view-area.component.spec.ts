import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewAreaComponent } from './main-view-area.component';

describe('MainViewAreaComponent', () => {
  let component: MainViewAreaComponent;
  let fixture: ComponentFixture<MainViewAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
