import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/users/service';
import { User } from 'src/app/users/shared/user.model';
import { Router } from '@angular/router';
import { AplicationService } from 'src/app/shared';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  @Input() error: string | null;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private appService: AplicationService, private router: Router) {

  }

  ngOnInit(): void {
  }


  login() {
    if (this.form.valid) {
      //this.form.value.username = "Teste";
      // console.log(this.form.value.username)
      //console.log(this.form.value.password)
      let getLogin: any = this.appService.makeLogin(this.form.value.username, this.form.value.password).subscribe((data: any) => {

        if (getLogin && data.token) {
          window.localStorage.setItem('x-access-token', data.token);
          this.user = getLogin.dados;
          this.router.navigate(['/home']);
          console.log(this.user)
        }


      }, error => {   
        if (error.descricao.indexOf('Senha') > -1 ) {

          this.form = new FormGroup({
            username: new FormControl(this.form.value.username),
            password: new FormControl(''),
          });

        } else {
          this.form = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
          });
        }
        this.error = error.descricao + ' Tente Novamente.'
      });
    }
  }

}