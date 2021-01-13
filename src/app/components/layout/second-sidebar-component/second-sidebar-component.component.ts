import { JqueryService } from './../../../services/jquery/jquery.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-sidebar-component',
  templateUrl: './second-sidebar-component.component.html',
  styleUrls: ['./second-sidebar-component.component.scss']
})
export class SecondSidebarComponentComponent implements OnInit {

  router;

  constructor(private _router: Router, private jquery: JqueryService) {


  }

  ngOnInit() {
    this.jquery.jqueryCode();
  }

}
