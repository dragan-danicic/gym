import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  p1: string;
  p2: string;

  m1: string;
  m2: string;
  errMessage: string;
  succMessage: string;

  constructor(private gymService: GymService) { }

  ngOnInit(): void {
    this.m1 = "";
    this.m2 = "";
    this.errMessage = "";
    this.succMessage = "";
  }

  changePassword() {

    if (!this.p1) {
      this.m1 = "First field is mendatory.";
      this.reset();
      return;
    }
    if (!this.p2) {
      this.m2 = "Second field is mendatory.";
      this.reset();
      return;
    }
    if (this.p1 !== this.p2) {
      this.errMessage = "Fields must be the same.";
      this.reset();
      return;
    }
    this.gymService.changePassword(this.p1, this.p2).subscribe(succ => this.handleSucc(), err => this.handleErr(err));
  }

  reset() {
    setTimeout(() => {
      this.m1 = "";
      this.m2 = "";
      this.errMessage = "";
      this.succMessage = "";
    }, 3000);
  }

  handleSucc() {
    this.succMessage = "Password is successfully changed."
    this.reset();
    this.p1 = "";
    this.p2 = "";
  }

  handleErr(err) {
    this.errMessage = "Password wasn't changed.Try later.";
    this.reset();
  }



}
