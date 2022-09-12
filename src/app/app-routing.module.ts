import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TableHomeComponent } from './table-home/table-home.component';
const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
  {
    path: 'products',
    component: TableHomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
