import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './get-all';
import { MaterialSharedModule } from 'src/app/shared'
import { UserService } from './service';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    UsersRoutingModule
  ], providers:[
    UserService,
  ]
})
export class UsersModule { }
