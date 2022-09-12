import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModalComponent } from './dialog-modal/dialog-modal/dialog-modal.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SuccesModalComponent } from './succes-modal/succes-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { CreateSuccessModalComponent } from './create-success-modal/create-success-modal.component';
import { ErrorUpdateModalComponent } from './Error/error-update-modal/error-update-modal.component';
import { ErrorCreateModalComponent } from './Error/error-create-modal/error-create-modal.component';
import { ErrorLoadModalComponent } from './Error/error-load-modal/error-load-modal.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TableHomeComponent } from './table-home/table-home.component';
import { CreateUserSuccessModalComponent } from './create-user-success-modal/create-user-success-modal.component';
import { ErrorCreateUserComponent } from './error-create-user/error-create-user.component';
import { LoginSuccessModalComponent } from './login-success-modal/login-success-modal.component';
import { LoginErrorModalComponent } from './login-error-modal/login-error-modal.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardComponent } from './guards/auth-guard/auth-guard.component';
import { AuthGuardService } from './guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogModalComponent,
    HighlightedDirective,
    SuccesModalComponent,
    DeleteModalComponent,
    CreateSuccessModalComponent,
    ErrorUpdateModalComponent,
    ErrorCreateModalComponent,
    ErrorLoadModalComponent,
    SignupComponent,
    LoginComponent,
    TableHomeComponent,
    CreateUserSuccessModalComponent,
    ErrorCreateUserComponent,
    LoginSuccessModalComponent,
    LoginErrorModalComponent,
    AuthGuardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [CookieService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
