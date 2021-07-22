import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/errors/not-found/not-found.component';
import { ServerErrorComponent } from './core/components/errors/server-error/server-error.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./account/account.module').then(m=> m.AccountModule),
    data: { preload: true }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=> m.DashboardModule),
    data: { preload: true }
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: { preload: true }
  },
  {
    path: '500',
    component: ServerErrorComponent,
    data: { preload: true }
  },
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m=> m.WebsiteModule),
    data: { preload: true }
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
