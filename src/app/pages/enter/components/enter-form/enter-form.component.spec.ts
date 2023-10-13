import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFormComponent } from './enter-form.component';

describe('EnterFormComponent', () => {
  let component: EnterFormComponent;
  let fixture: ComponentFixture<EnterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterFormComponent]
    });
    fixture = TestBed.createComponent(EnterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
