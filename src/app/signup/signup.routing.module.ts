import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardLogin } from '../core/auth/auth.guardLogin';
import { SignUpComponent } from './signUp.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    canActivate: [AuthGuardLogin],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
