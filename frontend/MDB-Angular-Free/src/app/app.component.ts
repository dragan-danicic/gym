import { Component, OnInit } from '@angular/core';
import { GymService } from './services/gym.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private gymService: GymService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("jwt")) {
      this.gymService.getJwt().subscribe(res => this.handleResponse(res));
    }
  }

  handleResponse(res) {
    const user = res.data.user;
    this.gymService.setCurrUser(user);
    if (user.role == '1') {
      this.router.navigate(['add-a-new-trainee']);
    } else if (user.role == '2') {
      this.router.navigate(['trainee-profile']);
    }
  }



} 