import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';



@Component({
  selector: 'app-search-trainees-and-charge-a-membercard',
  templateUrl: './search-trainees-and-charge-a-membercard.component.html',
  styleUrls: ['./search-trainees-and-charge-a-membercard.component.scss']
})
export class SearchTraineesAndChargeAMembercardComponent implements OnInit {

  idTrainee: string;
  cards: Array<any>;
  errorMessage: string;

  idCurr: string;
  nameT: string;

  constructor(private gymService: GymService) {

  }

  ngOnInit(): void {
    this.errorMessage = "";
    this.cards = [];
  }

  search() {
    this.gymService.getTrainee(this.idTrainee).subscribe(res => this.handleSucc(res.data), err => this.handleErr(err));
  }

  handleSucc(res) {
    
    this.idCurr = res.id;
    this.nameT = res.firstName + " " + res.lastName;
    this.gymService.getMembercards(this.idTrainee).subscribe((cards: any) => {
      this.cards = cards.data
      this.addStatus(cards.data);
    },(err)=>{
      this.cards = [];
      this.reset();
    });
  }

  handleErr(err) {
  
    this.errorMessage = err.error.data;
    this.reset();
    this.idCurr = undefined;
    this.nameT =undefined;
  }

  reset() {
    setTimeout(() => {
      this.errorMessage = ""; 
    }, 3000);
  } 

  handler(event) {
    this.gymService.getMembercards(this.idTrainee).subscribe((cards: any) => {
      this.cards = cards.data
      this.addStatus(this.cards);
    });
  }

  
  addStatus(cards) {

    cards.forEach(el => {
      const d1 = new Date(el.end);
      const d2 = new Date();
      if(d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()){
        el.status = "in date";
      }else if(d1 > d2){
        el.status = "in date"; 
      }else {
        el.status = "out dated"
      }
    }); 

  }

}
