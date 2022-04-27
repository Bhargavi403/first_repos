import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleLogin(form: any): void{
    console.log("submitted");
    console.log(form.value);// submittable form data 
    this.authService.login(form.value)
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.token){
          // save the token in sessionStorage/
          // this can be saved in cookies also.
          sessionStorage.setItem("authToken", res.token);
          // post login redirect to the return URL 
          this.router.navigateByUrl(this.activateRoute.snapshot.queryParams['redirectTo']);
        }
        
      });
  }

}
