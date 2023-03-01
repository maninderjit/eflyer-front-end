import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any = {};
  constructor(private router: Router, private userService:UserService) {

  }

  ngOnInit(): void {
    this.user = UserService.getUser();
    if (!this.user) {
      this.router.navigateByUrl('/login?url=' + this.router.url);
      return;
    }
    this.user.firstName = !this.user.firstName ? '' : this.user.firstName;
    this.user.lastName = !this.user.lastName ? '' : this.user.lastName;
    this.user.mobileNo = !this.user.mobileNo ? '' : this.user.mobileNo;
  }

  saveUserProfile(): void {
    this.userService.saveOrUpdate(this.user);
    
  }
}
