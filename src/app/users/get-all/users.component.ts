import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { User } from '../shared/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'login', 'sereal', 'lastIP'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined ;
  @ViewChild(MatSort) sort: MatSort | undefined ;
  users: User[] = [];
  dataSource;
  aux;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data.dados;
      this.dataSource = new MatTableDataSource(this.users); //carrego a variavel de filtro
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.aux = this.dataSource;
    }, error => {
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Carregar Aplicação ' , description: 'Error ' + error.status + ' - ' + error.error.descricao + ' Faça login novamente.' }]
      });
    });
    
  }
    //filtros
    applyFilter(event: Event) {

      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
    }
  
}
