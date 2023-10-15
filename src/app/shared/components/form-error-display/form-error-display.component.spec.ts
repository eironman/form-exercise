import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorDisplayComponent } from './form-error-display.component';

describe('FormErrorDisplayComponent', () => {
  let component: FormErrorDisplayComponent;
  let fixture: ComponentFixture<FormErrorDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormErrorDisplayComponent]
    });
    fixture = TestBed.createComponent(FormErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
