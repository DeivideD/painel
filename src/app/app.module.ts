import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components'
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EquipamentsModule } from './equipaments/equipaments.module';
import { MaterialSharedModule, AplicationService } from './shared';
import { MapsComponent } from './components/maps/maps.component';
import { DialogsComponent } from './components/dialog/dialogs.component';
import { ModalSheetComponent } from './components/modal-sheet/modal-sheet.component';
import { RightSidebarInfoComponent } from './components/right-sidebar-info/right-sidebar-info.component';
import { SidenavService } from './shared/';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MapsComponent,
    DialogsComponent,
    ModalSheetComponent,
    RightSidebarInfoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialSharedModule,
    AppRoutingModule,
    EquipamentsModule,
    BrowserAnimationsModule
  ],
  providers: [  AplicationService, SidenavService ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
