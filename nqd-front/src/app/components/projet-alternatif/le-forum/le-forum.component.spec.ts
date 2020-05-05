import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeForumComponent } from './le-forum.component';

describe('LeForumComponent', () => {
  let component: LeForumComponent;
  let fixture: ComponentFixture<LeForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
