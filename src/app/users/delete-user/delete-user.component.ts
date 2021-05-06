import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'
import { UsersComponent } from 'src/app/pages/users/users.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  user: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.data
    
  }


  deleteUser() {
    this.userService.attTable.emit(false);
    this.userService.deleteUser(this.user).subscribe((data: any) => {
      this.dialog.open(DialogsComponent,{
        data: [{ cod: 'Deletado com Sucesso', description: 'Usuario Deletado com Sucesso.' }]
      }); 
    }, 
    error => {
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Deletar', description: error.descricao + ' Tente Mais Tarde.' }]
      });
    });
    this.userService.attTable.emit(true);
  }
}
