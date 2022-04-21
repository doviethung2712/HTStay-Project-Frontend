import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  logoutForm: FormGroup;
  listcity: any = [];
  
  constructor(private authService: AuthService,
    private router: Router, private cityService: CityService) { }
  currentUser: any = '';
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.getAllCity();
  }


  getAllCity() {
    this.cityService.getAllCity().subscribe(res => {
      this.listcity = res;
    })
  }



  logout() {
    this.authService.logoutUser().subscribe(() => {
      localStorage.removeItem('admin');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['/'])
    })
  }



}
