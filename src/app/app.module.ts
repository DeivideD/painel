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
import { UsersModule } from './users/users.module';
import { MaterialSharedModule, AplicationService } from './shared';
import { MapsComponent } from './components/maps/maps.component';
import { DialogsComponent } from './components/dialog/dialogs.component';
import { ModalSheetComponent } from './components/modal-sheet/modal-sheet.component';
import { RightSidebarInfoComponent } from './components/right-sidebar-info/right-sidebar-info.component';
import { SidenavService } from './components/right-sidebar-info/sidenav.service';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MenuService } from './components/sidebar-menu/menu.service';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SidebarSearachComponent } from './components/sidebar-searach/sidebar-searach.component';
import { SearachnavService } from './components/sidebar-searach/searach.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipamentsComponent } from './pages/equipaments/equipaments.component';
import { UserService } from './users/service/users.service'
import { httpInterceptorProviders } from './http-intersector';
import { UsersComponent } from './pages/users/users.component';
import { TopbarNohomeComponent } from './components/topbar-nohome/topbar-nohome.component';
import { MenubarNohomeComponent } from './components/menubar-nohome/menubar-nohome.component';

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
    SidebarMenuComponent,
    MenubarComponent,
    SidebarSearachComponent,
    EquipamentsComponent,
    UsersComponent,
    TopbarNohomeComponent,
    MenubarNohomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    MaterialSharedModule,
    AppRoutingModule,
    EquipamentsModule,
    UsersModule,
    BrowserAnimationsModule
  ],
  providers: [  
    AplicationService, 
    SidenavService, 
    UserService,
    MenuService,
    httpInterceptorProviders,
    SearachnavService 
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
