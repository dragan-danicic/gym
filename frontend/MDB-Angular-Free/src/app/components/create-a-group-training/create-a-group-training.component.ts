import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-create-a-group-training',
  templateUrl: './create-a-group-training.component.html',
  styleUrls: ['./create-a-group-training.component.scss']
})
export class CreateAGroupTrainingComponent implements OnInit {


  name: string;
  date: Date;
  time: Time;

  m1: string;
  m2: string;
  m3: string;

  messageSucc: string;
  messageErr: string;

  constructor(private service: GymService) { }

  ngOnInit(): void {
    this.name = null;
    this.time = null;
    this.date = null;
    this.m1 = null;
    this.m2 = null;
    this.m3 = null;
  }

  make() {
    if (this.name === null) {
      this.m1 = "Name mandatory";
      this.resetMessage();
      return;
    }
    if (this.date === null) {
      this.m2 = "Date mandatory";
      this.resetMessage();
      return;
    }
    if (this.time === null) {
      this.m3 = "Time mandatory";
      this.resetMessage();
      return;
    }
    this.service.makeAGroupTraining(this.name, this.date, this.time).subscribe((succ) => this.handleResult(succ),
      (err) => this.handleResponse(err));
  }

  handleResult(res) {
    this.messageSucc = "Successfully added";
    this.resetMessage();
    this.name = null;
    this.time = null;
    this.date = null;
  }

  handleResponse(err) {
    
    this.messageErr = err.error.data;
    this.resetMessage();
  }

  private resetMessage(): void {
    setTimeout(() => {
      this.messageErr = "";
      this.messageSucc = "";
      this.m1 = "";
      this.m2 = "";
      this.m3 = "";
    }, 3000);
  }


}
