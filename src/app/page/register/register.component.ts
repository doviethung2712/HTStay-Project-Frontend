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

  registerFrom: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    role_id: new FormControl(),

  });
  contentEditable: any;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  toggleEditable(event) {
    if (event.target.checked) {
      this.contentEditable = 2;
    }
  }


  register() {
    this.authService.register(this.registerFrom.value).subscribe(() => {
      this.router.navigate(['/login']);
      alert("Success");
    }, () => {
      this.router.navigate(['/register']);
      alert("Fail")
    })
  }

}
