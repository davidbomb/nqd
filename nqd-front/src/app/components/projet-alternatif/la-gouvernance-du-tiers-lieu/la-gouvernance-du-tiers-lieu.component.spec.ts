import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaGouvernanceDuTiersLieuComponent } from './la-gouvernance-du-tiers-lieu.component';

describe('LaGouvernanceDuTiersLieuComponent', () => {
  let component: LaGouvernanceDuTiersLieuComponent;
  let fixture: ComponentFixture<LaGouvernanceDuTiersLieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaGouvernanceDuTiersLieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaGouvernanceDuTiersLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
