import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouComponent } from './thank-you.component';
import {StoreModule} from "@ngrx/store";
import {TranslateModule} from "@ngx-translate/core";

describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankYouComponent],
      imports: [
        StoreModule.forRoot({}),
        TranslateModule.forRoot()
      ]
    });
    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
