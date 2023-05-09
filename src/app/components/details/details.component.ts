import { Component,OnInit,OnChanges, AfterContentInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit {

  constructor() {}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngOnInit() : void {
    console.log('ngOnInit called');
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }

}
