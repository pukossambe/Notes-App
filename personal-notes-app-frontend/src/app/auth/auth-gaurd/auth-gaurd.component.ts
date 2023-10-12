import { Component, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-auth-gaurd',
  templateUrl: './auth-gaurd.component.html',
  styleUrls: ['./auth-gaurd.component.scss']
})
export class AuthGaurdComponent implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log("Is Authenticated is True: ", this.authService.isAuthenticated());
      return true;
    } else {
      console.log("Is Authenticated is false: ", this.authService.isAuthenticated());
      return false;
    }
  }

}

