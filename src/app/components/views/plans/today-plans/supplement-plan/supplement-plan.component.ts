import { JqueryService } from './../../../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplement-plan',
  templateUrl: './supplement-plan.component.html',
  styleUrls: ['./supplement-plan.component.scss']
})
export class SupplementPlanComponent implements OnInit {

  constructor (private jquery: JqueryService) {}

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
