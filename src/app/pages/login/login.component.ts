import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();


  
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  
  login() {
    if (this.form.valid) {

      console.log(this.form)

      this.submitEM.emit(this.form.value);
    }
  }

}
