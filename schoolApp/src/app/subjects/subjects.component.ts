import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.less']
})
export class SubjectsComponent implements OnInit {

  public subject: string | null | undefined;
  constructor( 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void { 
    this.subject = this.route.snapshot.queryParamMap.get('subject');
  
  }

}
