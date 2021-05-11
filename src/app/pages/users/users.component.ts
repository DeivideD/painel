import { Component, OnInit } from '@angular/core';
import { AplicationService } from 'src/app/shared';

@Component({
  selector: 'app-users-page',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private appService: AplicationService) { }

  ngOnInit(): void {
    this.appService.attCorrentePage('users');
  }

}
