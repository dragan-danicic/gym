import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-view-group-trainings-remove',
  templateUrl: './view-group-trainings-remove.component.html',
  styleUrls: ['./view-group-trainings-remove.component.scss']
})
export class ViewGroupTrainingsRemoveComponent implements OnInit {

  @Output() someEvent = new EventEmitter();
  @Input() elements:Array<any>;
  message:string;

  headElements = ['ID', 'Name', 'Date', 'Time','Remove'];

  constructor(private service:GymService) { }

  ngOnInit(): void {
  }

  remove(id){
    this.service.removeFromTraining(id).subscribe((res)=>this.handleSucc(res),(err)=>this.handleErr(err));
  }

  handleSucc(res: any): void {
    this.someEvent.emit();
  }

  handleErr(err: any): void {
    this.message = err.error.data;
    setTimeout(() => this.message = "",3000);
  }




}
