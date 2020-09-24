import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-view-trial-trainings',
  templateUrl: './view-trial-trainings.component.html',
  styleUrls: ['./view-trial-trainings.component.scss']
})
export class ViewTrialTrainingsComponent implements OnInit {

  
  headElements = ['id', 'name','phone','message','date'];

  elements;

  msg:string;

  constructor(private service:GymService) { }

  ngOnInit(): void {
    this.service.getTrialTrainings().subscribe((succ) => this.elements = succ.data,(err) => this.handleError(err));
  }

  handleError(err){
    this.elements = [];
    this.msg = err.error.data;
    setTimeout(() => this.msg = "" ,3000);
  }

  doneTrialTraining(id){
    this.service.doneTrialTrainings(id).subscribe((succ) => this.ngOnInit());
  }

}
 