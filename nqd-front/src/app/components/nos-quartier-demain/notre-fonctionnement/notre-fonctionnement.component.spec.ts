import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreFonctionnementComponent } from './notre-fonctionnement.component';

describe('NotreFonctionnementComponent', () => {
  let component: NotreFonctionnementComponent;
  let fixture: ComponentFixture<NotreFonctionnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotreFonctionnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreFonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
