import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesEspacesComponent } from './les-espaces.component';

describe('LesEspacesComponent', () => {
  let component: LesEspacesComponent;
  let fixture: ComponentFixture<LesEspacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesEspacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesEspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
