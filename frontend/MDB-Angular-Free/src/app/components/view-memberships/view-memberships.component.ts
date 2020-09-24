import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-view-memberships',
  templateUrl: './view-memberships.component.html',
  styleUrls: ['./view-memberships.component.scss']
})
export class ViewMembershipsComponent implements OnInit {

  constructor(private service:GymService) { }

  ngOnInit(): void {
    this.service.getMembercards().subscribe((result: any) => this.handleResult(result));
  }

  private handleResult(result: any): void {
    this.elements = result
  }

  elements: any = [

  ];

  headElements = ['ID', 'Start','Duration'];



}
