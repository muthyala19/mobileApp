import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ViewportScroller
 } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private scroll: ViewportScroller) { }


  ngOnInit(): void {
  }
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event:any){
    console.log(window.pageYOffset);
    this.pageYoffset = window.pageYOffset;
  }
  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  

  
}
