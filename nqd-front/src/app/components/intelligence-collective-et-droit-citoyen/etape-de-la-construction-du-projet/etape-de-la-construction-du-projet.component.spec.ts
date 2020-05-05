import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeDeLaConstructionDuProjetComponent } from './etape-de-la-construction-du-projet.component';

describe('EtapeDeLaConstructionDuProjetComponent', () => {
  let component: EtapeDeLaConstructionDuProjetComponent;
  let fixture: ComponentFixture<EtapeDeLaConstructionDuProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeDeLaConstructionDuProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeDeLaConstructionDuProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
