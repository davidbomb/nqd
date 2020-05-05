import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.authenticationService.register(this.user).subscribe(
      user => {
        console.log(user.json());
      },
      err => {
        console.log(err);
      }
    )
  }

}



