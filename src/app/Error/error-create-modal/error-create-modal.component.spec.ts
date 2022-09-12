import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCreateModalComponent } from './error-create-modal.component';

describe('ErrorCreateModalComponent', () => {
  let component: ErrorCreateModalComponent;
  let fixture: ComponentFixture<ErrorCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCreateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
