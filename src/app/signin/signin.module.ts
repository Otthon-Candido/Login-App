import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { SignInComponent } from './signin.component';
import { RouterModule } from '@angular/router';
import { SignInRoutingModule } from './signin.routing.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    SignInRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
  
  ]
})
export class SignInModule { }
