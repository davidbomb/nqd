import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSommesNousComponent } from './qui-sommes-nous.component';

describe('QuiSommesNousComponent', () => {
  let component: QuiSommesNousComponent;
  let fixture: ComponentFixture<QuiSommesNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiSommesNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSommesNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
