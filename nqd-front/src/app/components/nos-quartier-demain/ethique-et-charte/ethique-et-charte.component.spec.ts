import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthiqueEtCharteComponent } from './ethique-et-charte.component';

describe('EthiqueEtCharteComponent', () => {
  let component: EthiqueEtCharteComponent;
  let fixture: ComponentFixture<EthiqueEtCharteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthiqueEtCharteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthiqueEtCharteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
