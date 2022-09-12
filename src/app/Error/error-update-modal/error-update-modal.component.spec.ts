import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorUpdateModalComponent } from './error-update-modal.component';

describe('ErrorUpdateModalComponent', () => {
  let component: ErrorUpdateModalComponent;
  let fixture: ComponentFixture<ErrorUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorUpdateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
