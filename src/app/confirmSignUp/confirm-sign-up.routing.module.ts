import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardLogin } from '../core/auth/auth.guardLogin';
import { ConfirmSignUpComponent } from './confirm-sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmSignUpComponent,
    canActivate: [AuthGuardLogin],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmSignUpRoutingModule {}
