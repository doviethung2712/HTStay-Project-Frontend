import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { ListroomComponent } from './admin/room/listroom/listroom.component';
import { RoomlistComponent } from './host/component/roomlist/roomlist.component';
import { MasterhostComponent } from './host/masterhost/masterhost.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ChangepasswordComponent } from './user/component/changepassword/changepassword.component';
import { HomeuserComponent } from './user/component/homeuser/homeuser.component';
import { MasterComponent } from './user/master/master.component';


const routes: Routes = [
  // { path: "", component: MasterComponent },
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListroomComponent }
    ]
  },
  {
    path: "home", component: MasterComponent,
    children: [
      { path: 'list', component: HomeuserComponent }
    ]
  },
  {
    path: "host", component: MasterhostComponent,
    children: [
      { path: 'list', component: RoomlistComponent }
    ]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "changepassword", component: ChangepasswordComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  { path: "", component: MasterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
