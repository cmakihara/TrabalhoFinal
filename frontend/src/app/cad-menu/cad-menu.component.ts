import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cad-menu',
  templateUrl: './cad-menu.component.html',
  styleUrls: ['./cad-menu.component.css']
})
export class CadMenuComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private router: Router
  ) {  }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    console.log(this.router.url);
    return this.router.url.indexOf(routename) > -1;
  }
}
