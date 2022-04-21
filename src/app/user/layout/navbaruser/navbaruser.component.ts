import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  logoutForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router) { }
  currentUser: any = '';
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log(this.currentUser);
  }
  logout() {
    this.authService.logoutUser().subscribe(() => {
      localStorage.removeItem('admin');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    })
  }



}
