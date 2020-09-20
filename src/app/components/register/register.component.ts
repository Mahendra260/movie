import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

   
}
onclick(event){
  var user={
    name: this.firstname,
    lastname:this.lastname,
    email:this.email,
    password:this.password
  }
  this.auth.register(user).subscribe(function(data){
  console.log(data)
  })

}
  }


