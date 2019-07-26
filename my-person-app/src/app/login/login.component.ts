import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginServiceService} from "../login-service.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }
  login(formValue) {

    this.loginService.oauthLogin(formValue.username, formValue.password)
      .subscribe(response => {
        if (response) {

          localStorage.setItem('access_token', response['access_token']);
          console.log(localStorage.setItem('acces_token',response['access_token']));
          localStorage.setItem('token_type', response['token_type']);
          this.loginService.setLoginExists(true);

          this.router.navigate(['center']);


        } else {
          console.log('Try Login Response Unsuccesful' );
          // TODO: Do something for fail case

        }

      });
  }


  getUrl() {
    return "url('https://wpblink.com/sites/default/files/wallpaper/man-made/70710/skyscraper-wallpapers-hd-70710-1290899.png')";
  }
}
