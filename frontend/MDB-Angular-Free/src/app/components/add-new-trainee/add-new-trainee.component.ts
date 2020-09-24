import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';
import { Router } from '@angular/router';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-add-new-trainee',
  templateUrl: './add-new-trainee.component.html',
  styleUrls: ['./add-new-trainee.component.scss']
})
export class AddNewTraineeComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  phone: string;

  m1: string;
  m2: string;
  m3: string;
  m4: string;

  message: string;
  message2: string;

  constructor(private service: GymService, private router: Router) {
    this.firstName = null;
    this.lastName = null;
    this.username = null;
    this.phone = null;
    this.message = null;
    this.message2 = null;
    this.m1 = null;
    this.m2 = null;
    this.m3 = null;
    this.m4 = null;
  }

  ngOnInit(): void {
  }


  add() {

    if (this.firstName === null) {
      this.m1 = "FirstName mandatory";
      this.resetMessage();
      return;
    }
    if (this.lastName === null) {
      this.m1 = "LastName mandatory";
      this.resetMessage();
      return;
    }
    if (this.username === null) {
      this.m1 = "Username mandatory";
      this.resetMessage();
      return;
    }
    if (this.phone === null) {
      this.m1 = "Phone mandatory";
      this.resetMessage();
      return;
    }
    this.service.add({
      firstName: this.firstName, lastName: this.lastName, username: this.username, phone: this.phone
    })
      .subscribe((result: any) => this.handleResult(result), (err: any) => this.handleError(err));
  }

  private handleResult(result: any): void {
    
    this.message2 = "Successfully created profile with id = " + result['data'];
    this.resetFields();
    this.resetMessage();
  }

  private handleError(response: any): void {
    this.message = response.error.data;
    this.resetMessage();
  }

  resetMessage(): void {
    setTimeout(() => {
      this.m1 = "";
      this.m2 = "";
      this.m3 = "";
      this.m4 = "";
      this.message = "";
      this.message2 = "";
    }, 5000);
  }

  resetFields() {
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.phone = "";
  }


}
