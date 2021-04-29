import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialSharedModule } from 'src/app/shared'
import { UserService } from './service';
import { UsersComponent } from './get-all'


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    UsersRoutingModule
  ], 
  exports: [
    UsersComponent
  ],
  providers:[
    UserService,
  ],
})
export class UsersModule { }
