import { JqueryService } from './../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-navigation',
  templateUrl: './plans-navigation.component.html',
  styleUrls: ['./plans-navigation.component.scss']
})
export class PlansNavigationComponent implements OnInit {

  constructor(private jquery: JqueryService) { }

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
