import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [],
  exports: [
    MatGridListModule,
    MatChipsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatTooltipModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatBadgeModule
  ]
})
export class MaterialSharedModule { }

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */