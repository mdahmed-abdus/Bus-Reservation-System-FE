import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: 'users/login', component: LoginComponent },
  { path: 'users/register', component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
