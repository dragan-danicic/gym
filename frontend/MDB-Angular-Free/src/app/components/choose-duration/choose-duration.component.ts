import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-choose-duration',
  templateUrl: './choose-duration.component.html',
  styleUrls: ['./choose-duration.component.scss']
})
export class ChooseDurationComponent implements OnInit {

  selectedValue: string;
  @Input() id: string;
  @Output() responseCame: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor(private gymService: GymService) { }

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

  charge() {
    this.gymService.charge(this.id, this.selectedValue).subscribe((succ) => this.handleSucc(succ),
      (err) => this.handleErr(err));
  }

  evidentArriving(){
    this.gymService.evidentArriving(this.id).subscribe((succ) => this.handleSucc(succ),
    (err) => this.handleErr(err));
  }


  handleSucc(succ) {
    const obj = {
      succ:true,
      msg:succ.data
    }
    this.responseCame.emit(obj);
  } 

  handleErr(err) {
    
    const obj = {
      succ:false,
      msg:err.error.data
    }
    this.responseCame.emit(obj);
  }
 
 


}
