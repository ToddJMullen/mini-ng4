import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesCourComp1Component } from './des-cour-comp1.component';

describe('DesCourComp1Component', () => {
  let component: DesCourComp1Component;
  let fixture: ComponentFixture<DesCourComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesCourComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesCourComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
