import { Component, OnInit } from '@angular/core';
import { AplicationService } from 'src/app/shared';

@Component({
  selector: 'app-equipaments',
  templateUrl: './equipaments.component.html',
  styleUrls: ['./equipaments.component.css']
})
export class EquipamentsComponent implements OnInit {

  constructor(private appService: AplicationService) { }

  ngOnInit(): void {
    this.appService.attCorrentePage('equipaments');
  }
}
