import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../features/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pampe',
    loadChildren: () => import('../../features/pages/pampe/pampe.module').then( m => m.PampePageModule)
  },
  {
    path: 'qtdd',
    loadChildren: () => import('../../features/pages/qtdd/qtdd.module').then( m => m.QtddPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('../../features/pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../core/pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../../core/pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
];
