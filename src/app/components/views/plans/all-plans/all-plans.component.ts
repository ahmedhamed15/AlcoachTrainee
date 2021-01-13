import { JqueryService } from './../../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.scss']
})
export class AllPlansComponent implements OnInit {

  constructor (private jquery: JqueryService) {}

  ngOnInit() {
    setTimeout(() => {
      this.jquery.jqueryCode()
    }, 500)
  }

}
