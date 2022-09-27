import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './sharedComponents/change-password/change-password.component';
import { WalletComponent } from './sharedComponents/wallet/wallet.component';
import { BookingsComponent } from './sharedComponents/bookings/bookings.component';
import { SubDashboardComponent } from './sharedComponents/sub-dashboard/sub-dashboard.component';
import { UserProfileComponent } from './sharedComponents/user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    DashboardComponent,
    ChangePasswordComponent,
    WalletComponent,
    BookingsComponent,
    SubDashboardComponent,
    UserProfileComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
