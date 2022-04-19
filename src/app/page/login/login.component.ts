import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl()
    })
  }

  login() {
    console.log(this.loginForm.controls);
    Object.keys(this.loginForm.controls).forEach((item: any) => {
      if (this.loginForm.controls[item].errors !== null) {
        return;
      }
    })
    this.authService.login(this.loginForm.value).subscribe(res => {
      if (res.user.role_id == 1) {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('admin', JSON.stringify(res.user));
        this.router.navigate(['/admin']);
      } else if (res.user.role_id == 2) {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('host', JSON.stringify(res.user));
        this.router.navigate(['/host']);
      } else {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/home']);
      }
    }, (error) => {
      alert("Sai TK Or MK")
      this.router.navigate(['/login']);
    })
  }

}
