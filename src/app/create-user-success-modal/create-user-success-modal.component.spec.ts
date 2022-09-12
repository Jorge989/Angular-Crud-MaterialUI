import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserSuccessModalComponent } from './create-user-success-modal.component';

describe('CreateUserSuccessModalComponent', () => {
  let component: CreateUserSuccessModalComponent;
  let fixture: ComponentFixture<CreateUserSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserSuccessModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
