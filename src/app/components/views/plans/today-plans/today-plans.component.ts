import { JqueryService } from './../../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-today-plans',
  templateUrl: './today-plans.component.html',
  styleUrls: ['./today-plans.component.scss']
})
export class TodayPlansComponent implements OnInit {

  constructor(private title: Title, private jquery: JqueryService) {
    this.title.setTitle('Today Plans');
  }

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
