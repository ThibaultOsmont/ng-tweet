import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3sContentComponent } from './c3s-content.component';

describe('C3sContentComponent', () => {
  let component: C3sContentComponent;
  let fixture: ComponentFixture<C3sContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3sContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3sContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
