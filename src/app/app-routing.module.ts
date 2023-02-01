import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./core/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./core/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pampe',
    loadChildren: () => import('./features/pages/pampe/pampe.module').then( m => m.PampePageModule)
  },
  {
    path: 'qtdd',
    loadChildren: () => import('./features/pages/qtdd/qtdd.module').then( m => m.QtddPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./features/pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./core/pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./core/pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
