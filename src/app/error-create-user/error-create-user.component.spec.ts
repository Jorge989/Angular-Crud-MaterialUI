import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCreateUserComponent } from './error-create-user.component';

describe('ErrorCreateUserComponent', () => {
  let component: ErrorCreateUserComponent;
  let fixture: ComponentFixture<ErrorCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCreateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
