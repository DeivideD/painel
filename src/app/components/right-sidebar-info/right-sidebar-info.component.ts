import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-right-sidebar-info',
  templateUrl: './right-sidebar-info.component.html',
  styleUrls: ['./right-sidebar-info.component.css']
})
export class RightSidebarInfoComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;
  showFiller = false;
  
  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
  }

  closeDialog(){
    this.sidenavService.toggle();
  }
}
