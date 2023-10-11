import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatlogModule } from './catlog/catlog.module';
import { CartModule } from './cart/cart.module';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user-auth',
    loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(n => n.LayoutModule)
  },
  {
    path: 'catlog',
    loadChildren: () => import('./catlog/catlog.module').then(l => l.CatlogModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(p => p.CartModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
