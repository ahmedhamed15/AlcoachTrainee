import { JqueryService } from './../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-navigation',
  templateUrl: './days-navigation.component.html',
  styleUrls: ['./days-navigation.component.scss']
})
export class DaysNavigationComponent implements OnInit {

  constructor (private jquery: JqueryService) {}

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
