

import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import { RightSidenavComponent } from '../right-sidenav/right-sidenav.component';


@Injectable()
export class MenuService {
  public isActive:boolean = false;
  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    this.isActive = true;
    return this.sidenav.open();
  }


  public close() {
    this.isActive = false;
    return this.sidenav.close();
  }

  public toggle() {
    this.isActive = ! this.isActive;
    return this.sidenav.toggle();
  }


}