import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  item$: Observable<User[]>
  constructor(private userService:UserService,private router :Router) { }
  ngOnInit(){
    this.item$ = this.userService.getItem();
  }
  userRegister() {
    console.log("done");
     //if (this.registerForm.valid) {
       console.log(this.registerForm.value)
       this.userService.register(this.registerForm.value).subscribe((res) => {
        
         
         this.registerForm.reset();
        //  this.router.navigate(["user/login"]);
       });
     //}
   }


}
