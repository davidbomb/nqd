import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitCitoyenComponent } from './droit-citoyen.component';

describe('DroitCitoyenComponent', () => {
  let component: DroitCitoyenComponent;
  let fixture: ComponentFixture<DroitCitoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitCitoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
