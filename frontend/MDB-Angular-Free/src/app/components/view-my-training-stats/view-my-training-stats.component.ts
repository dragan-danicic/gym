import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-view-my-training-stats',
  templateUrl: './view-my-training-stats.component.html',
  styleUrls: ['./view-my-training-stats.component.scss']
})
export class ViewMyTrainingStatsComponent implements OnInit {

  trainings: Array<String>;
  selectedValue: string = null;
  date1: Date;
  date2: Date;
  show: boolean;
  messErr: string;

  constructor(private service: GymService) { }


  ngOnInit(): void {
    this.show = false;
    this.trainings = [];
    this.service.getTrainingsUnique().subscribe(succ => {
      succ.data.forEach(el => {
        this.trainings.push(el.name);
      });
    });
    this.reset();
  }

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Number of trainees' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 20
        }
      }
      ]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'blue',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  sendRequest() {
    this.service.getMyStats(this.selectedValue, this.date1, this.date2).subscribe((succ) => this.handleSucc(succ),(err) => this.handleErr(err));
  }

  handleSucc(succ) {
    this.show = true;
    this.reset();
    succ.data.sort((a,b) => this.service.compareDate(new Date(a.date),new Date(b.date)))
    succ.data.forEach(el => {
     this.lineChartLabels.push(el.date);
     this.lineChartData[0].data.push(el['UserGrouptrainings.cnt']);
    });
  }

  handleErr(err){
    this.show = false;
    this.reset();
    this.messErr = err.error.data;
    setTimeout(() => {
      this.messErr = "";
    },3000);
  }




  reset(){
    this.lineChartLabels = [];
    this.lineChartData[0].data = [];
  }


}
