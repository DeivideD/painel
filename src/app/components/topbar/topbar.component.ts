import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  showFiller: boolean = false;
  isSideVisible: boolean = false;
  toggleActive: boolean = false;
  constructor(private sidenav: SidenavService) {  }


  ngOnInit(): void {

  }

  showControl(){
    this.isSideVisible = true;
  }


  hideControl(){
    this.isSideVisible = false;
  }

  rightNave(){
    console.log("Clicked");
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
  }
}

