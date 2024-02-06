import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { SolicitResetPasswordModule } from '../solicitResetPassword/solicitResetPassword.module';
import { SignInModule } from '../signin/signin.module';
import { SignUpModule } from '../signup/signUp.module';
import { ResetPasswordModule } from '../resetPassword/resetPassword.module';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  providers: [],
  imports: [
    HomeRoutingModule,
    SignInModule,
    SignUpModule,
    ResetPasswordModule,
    SolicitResetPasswordModule,
    NgbDatepickerModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
    
],
})
export class HomeModule { }
