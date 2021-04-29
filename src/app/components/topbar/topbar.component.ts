import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AplicationService } from 'src/app/shared';
import { SidenavService } from '../right-sidebar-info/sidenav.service';
import { MenuService } from '../sidebar-menu/menu.service';
import { SearachnavService } from '../sidebar-searach/searach.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  showFiller: boolean = false;
  isSideVisible: boolean = false;
  isButtomAlertVisible: boolean = false;
  toggleActive: boolean = false;
  isSearchVisible = false;


  constructor(
    private sidenav: SidenavService,
    private principalMenu: MenuService,
    private sarachNave: SearachnavService,
    private appService: AplicationService) { }

  ngOnInit() {
 

  }


  rightNave() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }

  openPrincipalMenu() {
    this.principalMenu.toggle();
  }

  openSearachSideNav() {
    this.sarachNave.toggle();
  }

  logout(){
    this.appService.logout();
  }
}

