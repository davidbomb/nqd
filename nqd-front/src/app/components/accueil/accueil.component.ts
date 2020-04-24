import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [UserService]
})
export class AccueilComponent implements OnInit {

  users: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.log("error retrieving the users: " + error.status);
      }
    )
  }



  //this.users;// = new Array<any>();
  
  

}
