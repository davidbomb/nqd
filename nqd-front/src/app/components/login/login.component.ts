import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    let sampleUser = new User('David', 'ertyui');  
  }

  onLogin(): void {
    this.authenticationService.clearSession();
    this.authenticationService.login(this.user).subscribe(
      token => {
        this.authenticationService.storeToken(token);
        console.log(this.authenticationService.getToken());
        this.authenticationService.ensureAuthenticated().subscribe();
        this.router.navigateByUrl('/acceuil');
      },
      err => {
        console.log("error in login component")
        console.log(err);
    });
  }



   
  
  

}
