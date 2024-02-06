import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmSignUpRoutingModule } from './confirm-sign-up.routing.module';
import { ConfirmSignUpComponent } from './confirm-sign-up.component';


@NgModule({
  declarations: [
    ConfirmSignUpComponent
  ],
  imports: [
    ConfirmSignUpRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
  
  ]
})
export class ConfirmSignUpModule { }
