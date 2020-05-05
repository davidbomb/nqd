import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NousAiderComponent } from './nous-aider.component';

describe('NousAiderComponent', () => {
  let component: NousAiderComponent;
  let fixture: ComponentFixture<NousAiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NousAiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NousAiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
