import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  m1: string;
  m2: string;

  constructor(private gymService: GymService, private router: Router) {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
    this.m1 = null;
    this.m2 = null;
  }

  httpLogIn(): void {
    if (!this.username) {
      this.m1 = "Username mandatory";
      this.resetMessage();
      return;
    }
    if (!this.password) {
      this.m2 = "Password mandatory";
      this.resetMessage();
      return;
    }
    this.gymService.httpLogIn(this.username, this.password).subscribe((result: any) => this.handleResult(result), (err: any) => this.handleResponse(err));
  }

  handleResult(res) {
    
    const obj = res.data;
    this.gymService.setCurrUser(obj);
    
    localStorage.setItem('jwt', obj['token']);
    if (obj.role == '1') { 
      this.router.navigate(['add-a-new-trainee']);
    } else if (obj.role == '2') {
      this.router.navigate(['trainee-profile']);
    }
  }

  handleResponse(err) {
    this.message = err.error.data;
    this.resetMessage();
  }

  private resetMessage(): void {
    setTimeout(() => {
      this.message = "";
      this.m1 = "";
      this.m2 = "";
    }, 3000);
  }



}
