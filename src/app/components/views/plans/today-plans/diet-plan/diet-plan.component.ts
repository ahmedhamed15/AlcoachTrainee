import { JqueryService } from './../../../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss']
})
export class DietPlanComponent implements OnInit {

  constructor (private jquery: JqueryService) {}

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
