import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateUserSuccessModalComponent } from '../create-user-success-modal/create-user-success-modal.component';
import { ErrorCreateUserComponent } from '../error-create-user/error-create-user.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isErrormsg = false;
  userForm!: FormGroup;
  durationInSeconds = 5;
  isLoading = false;
  token = '';
  isPasswordVisible: boolean = false;
  changeType: boolean = true;
  changeTypeConfirmPassword: boolean = true;
  isPasswordConfirmVisible: boolean = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern(this.emailPattern)],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      passwordChangedAt: Date.now(),
    });
  }
  setCookie(token: string) {
    this.cookies.set('token', token);
  }
  viewpassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.changeType = !this.changeType;
  }
  viewpasswordConfirm() {
    this.isPasswordConfirmVisible = !this.isPasswordConfirmVisible;
    this.changeTypeConfirmPassword = !this.changeTypeConfirmPassword;
  }
  RegisterUser() {
    this.isLoading = true;

    this.api.PostUser(this.userForm.value).subscribe({
      next: (res) => {
        this.token = res.token;
        this.setCookie(this.token);
        this._snackBar.openFromComponent(CreateUserSuccessModalComponent, {
          duration: this.durationInSeconds * 1000,
        });
        this.userForm.reset;
        this.isLoading = false;
        setTimeout(() => {
          this.router.navigate(['/products'], { relativeTo: this.route });
        }, 2000);
      },
      error: () => {
        this.isLoading = true;
        this.isErrormsg = true;
        this._snackBar.openFromComponent(ErrorCreateUserComponent, {
          duration: this.durationInSeconds * 1000,
        });
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      },
    });
  }
}
