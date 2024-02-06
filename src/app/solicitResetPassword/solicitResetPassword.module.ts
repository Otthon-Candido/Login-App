import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitResetPasswordComponent } from './solicitResetPassword.component';
import { RouterModule } from '@angular/router';
import { SolicitResetPasswordRoutingModule } from './solicitResetPassword.routing.module';


@NgModule({
  declarations: [
    SolicitResetPasswordComponent
  ],
  imports: [
    SolicitResetPasswordRoutingModule,
    NgbDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
  
  ]
})
export class SolicitResetPasswordModule { }
