import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './core/guards/auth-login.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { MenuComponent } from './shared/components/menu/menu.component';
import { content } from './shared/router/feature-router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./core/pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./core/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    component: MenuComponent,
    children: content,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./core/pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'change-password/:email',
    loadChildren: () => import('./core/pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
