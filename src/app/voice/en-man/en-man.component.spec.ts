import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnManComponent } from './en-man.component';

describe('EnManComponent', () => {
  let component: EnManComponent;
  let fixture: ComponentFixture<EnManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
