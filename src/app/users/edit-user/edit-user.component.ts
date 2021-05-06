import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { User } from '../shared/user.model';
import {  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../service';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('formUser') formUser;
  user: User =  new User(); 
  permissions;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.user = this.data;

    this.userService.getPApeis().subscribe(data => {
      this.permissions = data.dados;
     });
  }


  editUser(){
    this.userService.attTable.emit(false);
    console.log(this.user);
    this.userService.editUser(this.user).subscribe(data => {

      this.dialog.open(DialogsComponent,{
        data: [{ cod: 'Editado com Sucesso', description: 'Usuario Editado com Sucesso.' }]
      })
    }),  error => {
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Salvar Usuario', description: error.descricao + ' Tente Mais Tarde.' }]
      });
      console.log(error.descricao);
    }
    this.userService.attTable.emit(true);

  }

  getErrorMessage(field) {
    if (this.formUser.controls[field].hasError('required')){
      return 'Campo nao pode ser vazio';
    }
    if (this.formUser.controls[field].hasError('minlength')){
      return 'Tamanho mínimo de 5 caracteres';
    }
    if (this.formUser.controls[field].hasError('email')){
      return 'Email Invalido';
    }
    return " ";
  }

}
