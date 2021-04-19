import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'equipamentos', loadChildren: () => import('./equipaments/equipaments.module').then(m => m.EquipamentsModule) },
  { path: 'equipamentos/todos', loadChildren: () => import('./equipaments/equipaments.module').then(m => m.EquipamentsModule) },
  { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'usuarios/todos', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
