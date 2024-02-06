import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitResetPasswordComponent } from './solicitResetPassword.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitResetPasswordRoutingModule {}
