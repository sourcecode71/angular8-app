import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from '../../shared/helpers/helpers';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private helpers: Helpers, private router: Router, private tokenService: TokenService) { }

  ngOnInit() {

    

  }


  login(): void {

    let authValues = {"Username":"pablo", "Password":"secret"};

    this.tokenService.auth(authValues).subscribe(token => {

      this.helpers.setToken(token);

      this.router.navigate(['/dashboard']);

    });

  }

}
