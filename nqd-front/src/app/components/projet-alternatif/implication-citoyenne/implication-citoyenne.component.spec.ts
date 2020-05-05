import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplicationCitoyenneComponent } from './implication-citoyenne.component';

describe('ImplicationCitoyenneComponent', () => {
  let component: ImplicationCitoyenneComponent;
  let fixture: ComponentFixture<ImplicationCitoyenneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplicationCitoyenneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplicationCitoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
