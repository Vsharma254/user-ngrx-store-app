import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseClgComponent } from './choose-clg.component';

describe('ChooseClgComponent', () => {
  let component: ChooseClgComponent;
  let fixture: ComponentFixture<ChooseClgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseClgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseClgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
