import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin.component';
import { AuthGuardLogin } from '../core/auth/auth.guardLogin';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [AuthGuardLogin],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInRoutingModule {}
