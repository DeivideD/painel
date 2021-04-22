import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../right-sidebar-info/sidenav.service';
import { MenuService } from '../sidebar-menu/menu.service';



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  showFiller: boolean = false;
  isSideVisible: boolean = false;
  isButtomAlertVisible: boolean  = false;
  toggleActive: boolean = false;

  constructor(private sidenav: SidenavService, private principalMenu : MenuService ) {  }
  
  ngOnInit() {
  }


  rightNave(){
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }



  openPrincipalMenu(){
    this.principalMenu.toggle();
  }
}

