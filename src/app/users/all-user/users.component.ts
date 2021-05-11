import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { User } from '../shared/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'
import { NewUserComponent } from '../new-user/new-user.component'
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'login', 'sereal', 'lastIP','papel', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  users: User[] = [];
  dataSource;
  aux;
  show: boolean = true;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.userService.attTable.subscribe( att =>{
      this.show = att;
      this.getAllUser();
    });

    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data.dados;
      console.log(this.users);
      this.dataSource = new MatTableDataSource(this.users); //carrego a variavel de filtro
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.aux = this.dataSource;
    }, error => {
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Carregar Aplicação ', description: 'Error ' + error.status + ' - ' + error.descricao + ' Faça login novamente.' }]
      });
    });

  }
  //filtros
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  addUser() {
    this.dialog.open(NewUserComponent)
  }

  editUser(username: string) {
  
    this.dialog.open(EditUserComponent, { data: username });
  }

   deleteUser(user) {
    this.dialog.open(DeleteUserComponent, { data: user });

  }
}
