import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-view-trainers-stats',
  templateUrl: './view-trainers-stats.component.html',
  styleUrls: ['./view-trainers-stats.component.scss']
})
export class ViewTrainersStatsComponent implements OnInit {


  date1: Date;
  date2: Date;
  show: boolean;
  messErr: string;

  barChartOptions: ChartOptions = {
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

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'blue',
    },
  ];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'number og trainings' }
  ];


  constructor(private service: GymService) { }

  ngOnInit(): void {
    this.show = true;
    this.reset();
  }


  sendRequest() {
    this.service.getTrainersStats(this.date1, this.date2).subscribe((succ) => this.handleSucc(succ), err => this.handleErr(err));
  }

  handleSucc(succ) {
    this.show = true;
    this.reset();
    succ.data.forEach(el => {
      this.barChartLabels.push(el.firstName + " " + el.lastName);
      this.barChartData[0].data.push(el['maker.cnt']);
    });
  }

  handleErr(err) {
    this.messErr = err.error.data;
    setTimeout(() => {
      this.messErr = "";
    }, 3000);
    this.show = false;
    this.reset();
  }

  reset() {
    this.barChartLabels = [];
    this.barChartData[0].data = [];
  }

}
