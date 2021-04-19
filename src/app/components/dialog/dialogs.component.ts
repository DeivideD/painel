import { Component, OnInit,Inject } from '@angular/core';
import {  MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
title = '';
description = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {


      this.data.map( map =>{
       this.title =  map.cod;
       this.description = map.description;
    });
  }

}
