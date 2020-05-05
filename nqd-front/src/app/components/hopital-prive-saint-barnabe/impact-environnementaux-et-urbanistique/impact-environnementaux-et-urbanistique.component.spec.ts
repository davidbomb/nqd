import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactEnvironnementauxEtUrbanistiqueComponent } from './impact-environnementaux-et-urbanistique.component';

describe('ImpactEnvironnementauxEtUrbanistiqueComponent', () => {
  let component: ImpactEnvironnementauxEtUrbanistiqueComponent;
  let fixture: ComponentFixture<ImpactEnvironnementauxEtUrbanistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactEnvironnementauxEtUrbanistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactEnvironnementauxEtUrbanistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
