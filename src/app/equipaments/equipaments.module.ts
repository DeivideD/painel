import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentsRoutingModule } from './equipaments-routing.module';
import { GetAllComponent } from './get-all';
import { EquipamentService } from './service';
import { MaterialSharedModule } from 'src/app/shared'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetAllComponent
  ],
  imports: [
    CommonModule,
    EquipamentsRoutingModule,
    MaterialSharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    EquipamentService
  ], 
  exports:[
    GetAllComponent
  ]
})
export class EquipamentsModule { }
