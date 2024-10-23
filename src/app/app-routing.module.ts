import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'systems',
    loadChildren: () =>
      import('./pages/systems/systems.module').then((m) => m.SystemsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'newsystem',
    loadChildren: () =>
      import('./pages/newsystem/newsystem.module').then(
        (m) => m.NewsystemModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'system/:id',
    loadChildren: () =>
      import('./pages/system/system.module').then((m) => m.SystemModule),
    canActivate: [AuthGuard],
  },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
