import { Injectable } from '@angular/core';

// For jquery
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class JqueryService {

  constructor() { }

  // All jquery code
  jqueryCode() {

    $(function() {

      'use strict';
      $(document).ready(function () {

        var plansHeading = $('#small-sidebar .plans-dropdown .plans-dropdown-heading');

        /* Start : Sidebar */
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
        /* End : Sidebar */


        /* Start : Circle progress */
        $('.circle').circleProgress({
          value: 0.6
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
        });
        /* End : Circle progress */

        /* Start :  */
        plansHeading.on('click', function() {
          $(this).next('.plans-list-dropdown').toggleClass('active');
        });
        plansHeading.next('.plans-list-dropdown').find('button').on('click', function() {
          var $this = $(this);
          plansHeading.text($this.text()).next('.plans-list-dropdown').toggleClass('active');
          if ($this.data('type') == "all-plans") {
            $('.toggle-plans-sections .all-plans-section').addClass('active').siblings().removeClass('active');
          } else {
            $('.toggle-plans-sections .today-plans-section').addClass('active').siblings().removeClass('active');
          }
        });
        /* End : */

        $('.change-main-sidebar-components').on('click', function() {
          var $this = $(this);
          $this.toggleClass('active');
          $('#sidebar > div').toggleClass('active');
        });

        for (var i = 0; i < 4; i++) {
          var canvas = document.getElementsByTagName('canvas')[i];
          canvas.width  = 150;
          canvas.height = 150;
        }



    });
    });

  }

}
