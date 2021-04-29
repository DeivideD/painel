import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isSideVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  divControl(){
    this.isSideVisible = !this.isSideVisible;
  }

}
