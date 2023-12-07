import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registration',
    loadComponent: () => import('./registration/registration.page').then( m => m.RegistrationPage)
  },  {
    path: 'user-profile',
    loadComponent: () => import('./user-profile/user-profile.page').then( m => m.UserProfilePage)
  },
  {
    path: 'meal-history',
    loadComponent: () => import('./meal-history/meal-history.page').then( m => m.MealHistoryPage)
  },
  {
    path: 'ai-chat',
    loadComponent: () => import('./ai-chat/ai-chat.page').then( m => m.AiChatPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'meal-scan',
    loadComponent: () => import('./meal-scan/meal-scan.page').then( m => m.MealScanPage)
  },
  {
    path: 'meal-detail',
    loadComponent: () => import('./meal-detail/meal-detail.page').then( m => m.MealDetailPage)
  },

];
