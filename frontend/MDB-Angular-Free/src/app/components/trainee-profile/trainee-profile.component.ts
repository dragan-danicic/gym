import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.scss']
})
export class TraineeProfileComponent implements OnInit {

  headElements = ['ID', 'Duration', 'Number of arriving','Last training', 'Start', 'End', 'Status'];

  todaysTrainings: Array<any>;
  futureTrainings: Array<any>;
  pastTrainings: Array<any>;

  name: string;
  id: string;
  cards: any;

  constructor(private gymService: GymService) { }

  ngOnInit(): void {
    this.todaysTrainings = [];
    this.futureTrainings = [];
    this.pastTrainings = [];
    this.name = this.gymService.getFirstName() + " " + this.gymService.getLastName();
    this.id = this.gymService.getId();
    this.gymService.getMembercards().subscribe(res => {
      this.cards = res['data'];
      this.addStatus(this.cards);
    });
    this.gymService.getGrouptraininsScheduled().subscribe((result: any) => {
      result.data.forEach(el => {
        const d1 = new Date();
        const d2 = new Date(el.date);
        const c = this.gymService.compareDate(d1, d2);
        if (c == 0) {
          this.todaysTrainings.push(el);
        } else if (c < 0) {
          this.futureTrainings.push(el);
        } else {
          this.pastTrainings.push(el);
        }
      });
      console.log(this.pastTrainings);
      console.log(this.todaysTrainings);
      console.log(this.futureTrainings);
    });
  }


  addStatus(cards) {

    cards.forEach(el => {
      const d1 = new Date(el.end);
      const d2 = new Date();
      if (d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) {
        el.status = "in date";
      } else if (d1 > d2) {
        el.status = "in date";
      } else {
        el.status = "out dated"
      }
    });
  }






}
