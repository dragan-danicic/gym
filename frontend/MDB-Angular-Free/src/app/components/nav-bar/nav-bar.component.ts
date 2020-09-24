import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(private gymService:GymService) { }

  ngOnInit(): void {
  }

  httpLogOut(){
    this.gymService.httpLogOut();
  }

  isTrainer():boolean{
    
    return this.gymService.isTrainer();
  }
  
  isTrainee():boolean{
    return this.gymService.isTrainee();
  }

  isAnybody():boolean{
    return this.gymService.isAnybody();
  }

  getName():string{
    return this.gymService.getFirstName()+" "+this.gymService.getLastName();
  }

}
