import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from './pages';
import { EquipamentsComponent } from './pages/equipaments/equipaments.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent }
    ], canActivate: [AuthGuard]
  },//reler sobre rotas filhas

  { path: 'equipamentos', component: EquipamentsComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
