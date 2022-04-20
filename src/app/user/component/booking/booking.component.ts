import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../../service/booking.service';
import {FormControl, FormGroup} from '@angular/forms';
import {StatusService} from '../../../service/status.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm = new FormGroup({
    'startDay': new FormControl(),
    'endDay': new FormControl(),
    // 'bookingDay': new FormControl(),
    'price': new FormControl(),
    'user_id': new FormControl(),
    'status_id': new FormControl(),
  });
  statuses = [];
  categories = [];
  date;


  constructor(private bookingService: BookingService,
              private statuesService: StatusService,
              private categoriesService : CategoryService,
              private router : Router) {
  }

  ngOnInit() {
  }

  bookingRoom() {

    this.bookingService.booking(this.bookingForm.value).subscribe(res => {
      alert(1);
    });
  }

  getAllStatues(){
    this.statuesService.getAllStatus().subscribe(res=>{
      this.statuses = res;
    })
  }

  getAllCategories(){
    this.categoriesService.getAllCategory().subscribe(res=>{
      this.categories = res;
    })
  }


}
