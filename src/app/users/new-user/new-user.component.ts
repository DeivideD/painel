import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/user.model';


@Component({
  selector: 'user-new',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User; 
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
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }


  saveUser() {



   console.log( this.user);
  }

  getErrorMessage(field) {
    if (this.formUser.get(field)?.hasError('minlength')) {
      return 'Campo deve ter no minimo 4 caracteres';
    }
    if (this.formUser.get(field)?.hasError('required')) {
      return 'Campo nao pode ser vazio!';
    }
    if (this.formUser.get(field)?.hasError('email')) {
      return 'Formato de Email Invado!';
    }
    return ''
  }
  
}


