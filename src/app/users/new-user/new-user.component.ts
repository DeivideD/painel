import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../shared/user.model';
import { UserService } from '../service';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'
import { Papel } from '../shared/papel.model';



@Component({
  selector: 'user-new',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild('formUser') formUser;
  passwordConfitm: string = '';
  user: User =  new User(); 
  permissions;


  /*
    formUser: FormGroup = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    permision: new FormControl('', [Validators.required]),
    departament: new FormControl('', [Validators.required]),
    base: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfitm: new FormControl('', [Validators.required]),

  });
  */

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPApeis().subscribe(data => {
     this.permissions = data.dados;
    });
  }

  saveUser() {
    console.log("Chamou")
    this.userService.attTable.emit(false);
    this.userService.saveeUser(this.user).subscribe(data => {

      this.dialog.open(DialogsComponent,{
        data: [{ cod: 'Cadastrado com Sucesso', description: 'Usuario Salvo com Sucesso.' }]
      });

    }),  error => {
      console.log("Entrou e deu erro")
      
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Salvar Usuario', description: error.descricao + ' Tente Mais Tarde.' }]
      });
  
    },
    next => console.log('Next num: ' + next),
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


