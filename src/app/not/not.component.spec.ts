import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotComponent } from './not.component';

describe('NotComponent', () => {
  let component: NotComponent;
  let fixture: ComponentFixture<NotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
