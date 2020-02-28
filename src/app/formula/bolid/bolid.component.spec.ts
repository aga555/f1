import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BolidComponent} from './bolid.component';

describe('BolidComponent', () => {
  let component: BolidComponent;
  let fixture: ComponentFixture<BolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
