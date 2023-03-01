import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={username:'',password:''};
  previousUrl = '';

  constructor(private route:ActivatedRoute, private router:Router, private userService:UserService){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.previousUrl = params['url'];
      console.log('previousUrl', this.previousUrl);
    });
  }

  submitLogin():void{
    alert(this.user.username);
    if(this.user.username.length==0){
      alert('username is empty');
      return;
    }
    alert(this.user.password);
    if(this.user.password.length==0){
      alert('password is empty');
      return;
    }
    this.userService.login(this.user).subscribe((user:any)=>{
      UserService.setUser(user);
      user = UserService.getUser();
      if(user.authorized){
        alert('Congrats you are logged in');
        this.router.navigateByUrl(this.previousUrl);
      }
    });
  }
}
