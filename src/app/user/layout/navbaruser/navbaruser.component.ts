import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  constructor() { }
  currentUser: any = '';
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser);
    
  }

}
