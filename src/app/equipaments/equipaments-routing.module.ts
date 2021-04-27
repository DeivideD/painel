import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { AuthGuard } from '../shared'

export const routes: Routes = [
  { path: '', component: GetAllComponent, canActivate: [ AuthGuard ]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentsRoutingModule { }
