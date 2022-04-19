import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    // phone: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    role_id: new FormControl(),
    // role: new FormControl(),
  });
  contentEditable: any;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm.value);
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.router.navigate(['/register']);
    } else {
      this.authService.register(this.registerForm.value).subscribe(() => {
        this.router.navigate(['/login']);
        alert("Success");
      }, () => {
        this.router.navigate(['/register']);
        alert("Fail")
      })
    }

  }

}
