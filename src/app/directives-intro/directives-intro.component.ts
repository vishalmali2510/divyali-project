import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-intro',
  templateUrl: './directives-intro.component.html',
  styleUrls: ['./directives-intro.component.scss']
})
export class DirectivesIntroComponent implements OnInit {
// numbers = [1, 2, 3, 4, 5];
 oddNumbers = [1, 3, 5];
 evenNumbers = [2, 4];
 onlyOdd = false;
 value = 5;
  constructor() { }

  ngOnInit() {
  }

}
