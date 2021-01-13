import { JqueryService } from './../../../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-workout-plans',
  templateUrl: './all-workout-plans.component.html',
  styleUrls: ['./all-workout-plans.component.scss']
})
export class AllWorkoutPlansComponent implements OnInit {

  constructor(private jquery: JqueryService) { }

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
