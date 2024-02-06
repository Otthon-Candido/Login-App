import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
        path: 'login', 
        loadChildren: () => import('./signin/signin.module').then(m => m.SignInModule)
    },
    { 
        path: 'home', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    { 
        path: 'signUp', 
        loadChildren: () => import('./signup/signUp.module').then(m => m.SignUpModule)
    },
    { 
        path: 'solicitResetPassword', 
        loadChildren: () => import('./solicitResetPassword/solicitResetPassword.module').then(m => m.SolicitResetPasswordModule)
    },
    { 
        path: 'resetPassword', 
        loadChildren: () => import('./resetPassword/resetPassword.module').then(m => m.ResetPasswordModule),

        
    },
    { 
        path: 'active', 
        loadChildren: () => import('./confirmSignUp/confirm-sign-up.module').then(m => m.ConfirmSignUpModule),

        
    },
    {
        path: '**',
        redirectTo: "login"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

