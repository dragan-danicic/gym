import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';
import { element } from 'protractor';

@Component({
  selector: 'app-view-group-trainings',
  templateUrl: './view-group-trainings.component.html',
  styleUrls: ['./view-group-trainings.component.scss']
})
export class ViewGroupTrainingsComponent implements OnInit {


  headElements = ['ID', 'Name', 'Date', 'Time','Number of trainees'];
  elements:Array<any>;

  constructor(private service:GymService) { }

  ngOnInit(): void {
    this.service.getGrouptraininsId().subscribe((result: any) => this.handleResult(result),(err) => this.elements = []);
  }
  
  handleResult(result: any): void {
    
    this.elements = result.data;
  }


}
