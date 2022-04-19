import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbarhost',
  templateUrl: './navbarhost.component.html',
  styleUrls: ['./navbarhost.component.css']
})
export class NavbarhostComponent implements OnInit {
  logoutForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router) { }
  currentHost: any = '';
  ngOnInit() {
    this.currentHost = JSON.parse(localStorage.getItem('host'));
  }
  logout() {
    this.authService.logoutUser().subscribe(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('host');
      localStorage.removeItem('token');
    })
  }
}
