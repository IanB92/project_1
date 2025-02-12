import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {User} from '../user/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
toggle =true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    return this.authService.loggedIn;
  }

  getRole(): string{
    let data: User = this.authService.retrieveUser();
    return data.role;
  }

  isCollapsed(){
      if (this.toggle){;
        this.toggle = false;
    
      }else{
        this.toggle =true;
      }
  }

 
}
