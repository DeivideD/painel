import { Component, OnInit } from '@angular/core';
import { AplicationService } from 'src/app/shared';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isHomeSidebar: boolean = true;

  constructor(private appService: AplicationService) { }

  ngOnInit(): void {
    this.appService.correntPage.subscribe(data =>{
        if(data !== 'home'){
          this.isHomeSidebar = false;
          console.log(this.isHomeSidebar);
        }
    });
  }
}
