import { Component, Input , OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'
import { MenuService } from './menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})


export class SidebarMenuComponent implements OnInit {
  @ViewChild('principalMenu', {static: true}) public principalMenu: MatSidenav;
  isSideVisible: boolean = false;

  constructor(private menuService: MenuService ) { }

  ngOnInit(): void {
    this.menuService.setSidenav(this.principalMenu);
  }

  

  divControl(){
    this.isSideVisible = !this.isSideVisible;
  }

  toggleMenu(){
    this.menuService.toggle();
  }

}
