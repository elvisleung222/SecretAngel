import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedsComponent } from './selecteds.component';

describe('SelectedsComponent', () => {
  let component: SelectedsComponent;
  let fixture: ComponentFixture<SelectedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
