import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    NgbPaginationModule, NgbTypeaheadModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    UserRoutingModule
  ],
  providers: [
  
  ]
})
export class UserModule { }
