import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';
import { element } from 'protractor';

@Component({
  selector: 'app-view-group-trainings-and-sign-up',
  templateUrl: './view-group-trainings-and-sign-up.component.html',
  styleUrls: ['./view-group-trainings-and-sign-up.component.scss']
})
export class ViewGroupTrainingsAndSignUpComponent implements OnInit {


  private messageSucc: string;
  private messageErr: string;
  msg: string;

  lastClicked: number;

  constructor(private gymService: GymService) { }

  ngOnInit(): void {
    this.messageErr = "";
    this.messageSucc = "";
    this.gymService.getGrouptrainins().subscribe((result: any) => this.elements = result.data,(err)=> {
      this.elements = [];
      this.msg = err.error.data;
      this.resetMessage();
    });
  }

  elements: any = [];

  headElements = ['ID', 'Name', 'Date', 'Time', 'Sign up'];


  signUpGrouptraining(id: number) {
    this.gymService.signUpGrouptraining(id).subscribe((result: any) => this.handleSucc(result),
      (err: any) => this.handleError(err));
    this.lastClicked = id;
  }


  handleSucc(res) {
    this.messageSucc = "Successfully signed up";
    this.resetMessage();
  }

  handleError(err) {
    
    
      this.messageErr = err.error.data;
      this.resetMessage();
  }

  getMessageSucc() {
    return this.messageSucc;
  }
  getMessageErr() {
    return this.messageErr;
  }

  private resetMessage(): void {
    setTimeout(() => {
      this.messageErr = "";
      this.messageSucc = "";
      this.msg = "";
    }, 4000);
  }


}
