import { JqueryService } from './../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-sidebar',
  templateUrl: './small-sidebar.component.html',
  styleUrls: ['./small-sidebar.component.scss']
})
export class SmallSidebarComponent implements OnInit {

  constructor(private jquery: JqueryService) { }

  ngOnInit() {
    this.jquery.jqueryCode()
  }

}
