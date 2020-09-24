import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';
import { Observable, of, pipe, throwError } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up-trial-training',
  templateUrl: './sign-up-trial-training.component.html',
  styleUrls: ['./sign-up-trial-training.component.scss']
})
export class SignUpTrialTrainingComponent implements OnInit {


  name: string;
  phone: string;
  message: string;

  succ: string;
  err: string

  m1: string;
  m2: string;

  constructor(private gymService: GymService) { }

  ngOnInit(): void {
  }
  
  trialTraining() { 

    if (!this.name) {
      this.m1 = "Name is mandatory.";
      this.reset();
      return;
    }
    if (!this.phone) {
      this.m2 = "Phone is mandatory.";
      this.reset();
      return;
    }
    this.gymService.trialTraining(this.name, this.phone, this.message).subscribe(() => this.handleResult(), (err) => this.handleError(err));
  }

  handleResult() {
    this.succ = "You successfully scheduled your training."
    this.name = "";
    this.phone = "";
    this.message = "";
    this.reset();
  }

  handleError(err) {
    this.err = err.error.data;
    this.reset();
  }

  reset() {
    setTimeout(() => {
      this.err = '';
      this.succ = '';
      this.m1 = '';
      this.m2 = '';
    }, 3000);
  }


}
