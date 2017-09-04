import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-des-cour-comp1',
  templateUrl: './des-cour-comp1.component.html',
  styleUrls: ['./des-cour-comp1.component.css']
})
export class DesCourComp1Component implements OnInit {

	subTitle:string = "This is the sub title!";

  constructor() { }

  ngOnInit() {
  }

}
