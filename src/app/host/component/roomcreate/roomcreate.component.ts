import { StatusService } from "./../../../service/status.service";
import { CategoryService } from "./../../../service/category.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RoomService } from "src/app/service/room.service";
import { CityService } from "src/app/service/city.service";

@Component({
  selector: "app-roomcreate",
  templateUrl: "./roomcreate.component.html",
  styleUrls: ["./roomcreate.component.css"],
})
export class RoomcreateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private router: Router,
    private categoryService: CategoryService,
    private cityService: CityService,
    private statusService: StatusService
  ) { }
  currentUser: any = "";
  createRoomForm = this.fb.group({
    name: [
      "",
      [Validators.maxLength(120), Validators.minLength(6), Validators.required],
    ],
    address: ["", [Validators.required, Validators.maxLength(250)]],
    category_id: ["", [Validators.required]],
    city_id: ["", Validators.required],
    bedroom: ["", [Validators.required, Validators.min(1)]],
    bathroom: ["", [Validators.required, Validators.min(1)]],
    description: ["", [Validators.required, Validators.maxLength(250)]],
    price: ["", [Validators.required]],
    user_id: [""],
    status_id: ["", [Validators.required]]
  });
  categories = [];
  cities = [];
  statuses = [];
  file: File = null;
  url: any;
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.getAllCategory();
    this.getAllCity();
    this.getAllStatus();
  }

  get f() {
    return this.createRoomForm.controls;
  }

  createRoom() {
    const room = this.createRoomForm.value;
    room.user_id = this.currentUser.id;
    room.image = this.url;
    console.log(room);
    this.roomService.createRoomHost(room).subscribe(() => {
      this.router.navigate(["/host"]);
    });
  }

  onChange(event) {
    const urlSize = URL.createObjectURL(event.target.files[0]);

    console.log(urlSize);


    this.url = urlSize
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
    });
  }

  getAllCity() {
    this.cityService.getAllCity().subscribe((res) => {
      this.cities = res;
    });
  }

  getAllStatus() {
    this.statusService.getAllStatus().subscribe((res) => {
      this.statuses = res;
    });
  }

}
