import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-charge-a-member-card',
  templateUrl: './charge-a-member-card.component.html',
  styleUrls: ['./charge-a-member-card.component.scss']
})
export class ChargeAMemberCardComponent implements OnInit {


  selectedValue: string;
  selectedUsername: string;
  messageSucc: string;
  messageErr: any;
  messageUsername: string;
  messageDuration: string;

  usernames: Array<string>;

  options = [
    {
      id: '1',
      value: 'One month'
    },
    {
      id: '2',
      value: 'Two months'
    },
    {
      id: '3',
      value: 'Three months'
    },
    {
      id: '6',
      value: 'Six months'
    },
    {
      id: '12',
      value: 'Twelve months'
    }
  ]

  constructor(private gymService: GymService) { }

  ngOnInit(): void {
    this.selectedValue = null;
    this.selectedUsername = null;
    this.usernames = [];
    this.gymService.getAllTrainees().subscribe(succ => this.handle2(succ));
  }

  handle2(succ) {
    succ.forEach(el => {
      this.usernames.push(el['username']);
    });
  }

  charge() {

    if (this.selectedUsername === null) {
      this.messageUsername = "Username mandatory";
      this.resetMessage();
      return;
    }
    if (this.selectedValue === null) {
      this.messageDuration = "Duration mandatory";
      this.resetMessage();
      return;
    }
    this.gymService.charge(this.selectedUsername, this.selectedValue).subscribe((succ) => this.handleResult(succ),
      (err) => this.handleResponse(err));
  }

  handleResult(res) {
    this.messageSucc = "Successfully signed up";
    this.resetMessage();
  }

  handleResponse(err) {
    this.messageErr = "Error accured.";
    this.resetMessage();
  }

  private resetMessage(): void {
    setTimeout(() => {
      this.messageErr = "";
      this.messageSucc = "";
      this.messageUsername = "";
      this.messageDuration = "";
    }, 3000);
  }

}
