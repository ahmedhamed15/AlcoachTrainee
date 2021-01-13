import { JqueryService } from './../../../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.scss']
})
export class WorkoutPlanComponent implements OnInit {

  constructor(private jquery: JqueryService) { }

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
