import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginErrorModalComponent } from '../login-error-modal/login-error-modal.component';
import { LoginSuccessModalComponent } from '../login-success-modal/login-success-modal.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  durationInSeconds = 5;
  isLoading = false;
  token = '';
  isErrormsg = false;
  isPasswordVisible: boolean = false;
  changeType: boolean = true;
  changeTypeConfirmPassword: boolean = true;
  isPasswordConfirmVisible: boolean = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.pattern(this.emailPattern)],
      password: ['', Validators.required],
    });
  }
  viewpassword() {
    console.log('Entrou 1');
    console.log('this.isPasswordConfirmVisible', this.isPasswordVisible);
    this.isPasswordVisible = !this.isPasswordVisible;
    this.changeType = !this.changeType;
  }
  viewpasswordConfirm() {
    console.log('Entrou 2');
    console.log('this.isPasswordConfirmVisible', this.isPasswordConfirmVisible);
    this.isPasswordConfirmVisible = !this.isPasswordConfirmVisible;
    this.changeTypeConfirmPassword = !this.changeTypeConfirmPassword;
  }
  setCookie(token: string) {
    this.cookies.set('token', token);
  }
  LoginUser() {
    this.isLoading = true;

    this.api.LoginUser(this.loginForm.value).subscribe({
      next: (res) => {
        this.token = res.token;
        this.setCookie(this.token);
        this._snackBar.openFromComponent(LoginSuccessModalComponent, {
          duration: this.durationInSeconds * 1000,
        });
        this.loginForm.reset;
        this.isLoading = false;
        setTimeout(() => {
          this.router.navigate(['/products'], { relativeTo: this.route });
        }, 2000);
      },
      error: () => {
        this.isLoading = true;
        this.isErrormsg = true;
        this._snackBar.openFromComponent(LoginErrorModalComponent, {
          duration: this.durationInSeconds * 1000,
        });
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      },
    });
  }
}
