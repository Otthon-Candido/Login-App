import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './resetPassword.component';
import { ResetPasswordRoutingModule } from './resetPassword.routing.module';


@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    ResetPasswordRoutingModule
  ],
  providers: [
  
  ]
})
export class ResetPasswordModule { }
