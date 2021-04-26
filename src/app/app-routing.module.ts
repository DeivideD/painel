import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from './pages';
import { AuthGuard } from './shared';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [{ path: 'home', component: HomeComponent }] },//reler sobre rotas filhas
  { path: 'equipamentos', loadChildren: () => import('./equipaments/equipaments.module').then(m => m.EquipamentsModule)},
  { path: 'equipamentos/todos', loadChildren: () => import('./equipaments/equipaments.module').then(m => m.EquipamentsModule) },
  { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] },
  { path: 'usuarios/todos', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
