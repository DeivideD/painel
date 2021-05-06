import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialSharedModule } from 'src/app/shared'
import { UserService } from './service';
import { UsersComponent } from './all-user';
import { NewUserComponent } from './new-user/new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component'


@NgModule({
  declarations: [ 
    UsersComponent,
    NewUserComponent, 
    DeleteUserComponent, EditUserComponent,
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
