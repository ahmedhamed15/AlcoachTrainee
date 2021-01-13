import { JqueryService } from './../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meals-navigation',
  templateUrl: './meals-navigation.component.html',
  styleUrls: ['./meals-navigation.component.scss']
})
export class MealsNavigationComponent implements OnInit {

  constructor (private jquery: JqueryService) {}

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
