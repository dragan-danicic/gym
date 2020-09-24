import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';
import { useAnimation } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  firstName:string;
  lastName:string;
  username:string;
  password:string;
  phone:string;

  m1:string;
  m2:string;
  m3:string;
  m4:string;
  m5:string;

  message:string;

  constructor(private service:GymService,private router: Router) { 
    this.firstName = null;
    this.lastName = null;
    this.username = null;
    this.password = null;
    this.phone = null;
    this.message = null;
    this.m1 = null;
    this.m2 = null;
    this.m3 = null;
    this.m4 = null;
    this.m5 = null;
  }

  ngOnInit(): void {
  }


  register(){
    if(this.firstName === null){
      this.m1 = "FirstName mandatory";
      this.resetMessage();
      return;
    }
    if(this.lastName === null){
      this.m1 = "LastName mandatory";
      this.resetMessage();
      return;
    }
    if(this.username === null){
      this.m1 = "Username mandatory";
      this.resetMessage();
      return;
    }
    if(this.password === null){
      this.m1 = "Password mandatory";
      this.resetMessage();
      return;
    }
    if(this.phone === null){
      this.m1 = "Phone mandatory";
      this.resetMessage();
      return;
    }
      this.service.register({firstName:this.firstName,lastName:this.lastName,username:this.username,
        password:this.password,phone:this.phone})
        .subscribe((result: any) => this.handleResult(result), (err: any) => this.handleError(err));
  }
  
  private handleResult(result: any): void { 
    this.router.navigate(['log-in']);   
  } 

  private handleError(response: any): void {
    this.message = "Unsuccessfully created.Try again.";
  }

  resetMessage():void{
    setTimeout(() => {
      this.m1 = "";
      this.m2 = "";
      this.m3 = "";
      this.m4 = "";
      this.m5 = "";
      this.message = "";
    }, 3000);
  }

}

  


