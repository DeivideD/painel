import { Component, OnInit } from '@angular/core';
import { AplicationService } from 'src/app/shared';
import { MenuService } from '../sidebar-menu/menu.service';


@Component({
  selector: 'app-topbar-nohome',
  templateUrl: './topbar-nohome.component.html',
  styleUrls: ['./topbar-nohome.component.css']
})
export class TopbarNohomeComponent implements OnInit {
  showFiller: boolean = false;
  isSideVisible: boolean = false;
  isButtomAlertVisible: boolean = false;
  toggleActive: boolean = false;
  isSearchVisible = false;

  constructor(
    private principalMenu: MenuService,
    private appService: AplicationService) { }

  ngOnInit(): void {
  }


  openPrincipalMenu() {
    this.principalMenu.toggle();
  }

  logout(){
    this.appService.logout();
  }
}
