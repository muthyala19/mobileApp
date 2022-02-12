import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.less']
})
export class LeftNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  status: boolean = false;
  toggleMenu() {
    this.status = !this.status;
    // alert("test");
    // let el=document.querySelector(".mat-sidenav-container");
    // el?.classList.add("hide-menu");

  }
}
