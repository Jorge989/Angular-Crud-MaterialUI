import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLoadModalComponent } from './error-load-modal.component';

describe('ErrorLoadModalComponent', () => {
  let component: ErrorLoadModalComponent;
  let fixture: ComponentFixture<ErrorLoadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLoadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLoadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
