import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {


  }
  onclick(event) {
    event.preventDefault();
    var user = {
      email: this.username,
      password: this.password
    }
    console.log(user);
    console.log(this.auth)
    this.auth.login(user).subscribe(function(data) {
      console.log(data);
      if (data.loginSucess) {
        this.auth.loogedIn = true;
        this.router.navigate(['/home']);
      }(err)=>{
        console.log(err)
      }
    })
  }

}
