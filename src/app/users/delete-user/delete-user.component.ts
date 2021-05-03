import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service';
import { MatDialog } from '@angular/material/dialog';

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
    this.userService.deleteUser(this.user).subscribe((data: any) => {
      console.log('Entrou aqui sub')
      this.dialog.open(DialogfildBack, { data: "Usuario Deletado com Sucesso!" });
    }, error => {
      console.log('Entrou aqui Erro')
      this.dialog.open(DialogfildBack, {
        data:error.descricao 
      });
    });
  }
}


@Component({
  selector: 'dialog-content-example',
  template: '<p>{{ message }}</p>',
})
export class DialogfildBack {
  message = 'Testadno';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data);
    this.message = this.data
  }

  openDialog() {
  }
}
