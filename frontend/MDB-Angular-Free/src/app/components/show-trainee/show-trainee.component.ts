import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-show-trainee',
  templateUrl: './show-trainee.component.html',
  styleUrls: ['./show-trainee.component.scss']
})
export class ShowTraineeComponent implements OnInit {

  @Input() cards: Array<any>;
  @Input() idCurr: string;
  @Input() nameT: string;
  @Output() responseCame:EventEmitter<any> = new EventEmitter<any>();
   
  headElements = ['ID','Duration','Number of arriving','Last training','Start','End','Status'];
  
  messageSucc:string;
  messageErr:string;

  
  selectedValue: string;
  
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
 
  ngOnInit() {
  }

  handler(obj){
    if(obj.succ){
      this.messageSucc = obj.msg;
      this.responseCame.emit(null);
    }else{
      this.messageErr = obj.msg;
    }
    setTimeout(() => {
      this.messageErr = "";
      this.messageSucc = "";
    }, 4000);
  }

}
