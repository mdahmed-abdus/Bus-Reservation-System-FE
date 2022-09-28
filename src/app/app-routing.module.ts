import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowBusComponent } from './show-bus/show-bus.component';
import { ShowBussesComponent } from './show-busses/show-busses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/register', component: RegisterUserComponent },
  { path: 'users/dashboard', component: DashboardComponent },
  { path: 'show-busses', component: ShowBussesComponent },
  { path: 'show-busses/:id', component: ShowBusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
