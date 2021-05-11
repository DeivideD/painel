import { Component, OnInit } from '@angular/core';
import { AplicationService } from 'src/app/shared';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private appService: AplicationService ) { }

  ngOnInit(): void {
    this.appService.attCorrentePage('home');
  }

}
