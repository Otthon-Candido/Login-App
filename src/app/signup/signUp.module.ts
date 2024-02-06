import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './signUp.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { RouterModule } from '@angular/router';
import { SignUpRoutingModule } from './signup.routing.module';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    SignUpRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
  
  ]
})
export class SignUpModule { }
