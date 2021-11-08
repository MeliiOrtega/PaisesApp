import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

}
