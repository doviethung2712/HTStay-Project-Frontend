import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      if(res.user.role_id == 2){
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/home']);
      }
      localStorage.setItem('user', JSON.stringify(res.user));
    },(error)=>{
      this.router.navigate(['/login']);
    })
  }

}
