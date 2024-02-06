import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
       {
         path: "user",
         loadChildren: () => import('../home/user/user.module').then(m => m.UserModule),
         canActivate: [AuthGuard]
       },
      {
        path: '**',
        redirectTo: 'user',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
