import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccessModalComponent } from './login-success-modal.component';

describe('LoginSuccessModalComponent', () => {
  let component: LoginSuccessModalComponent;
  let fixture: ComponentFixture<LoginSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSuccessModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
