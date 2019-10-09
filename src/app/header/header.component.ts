import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() featureSelcted = new EventEmitter<string>();
@Input() type: any;
 // tslint:disable-next-line:typedef-whitespace
 onSelect(Feature: string) {

  this.featureSelcted.emit(Feature);
 }
 ngOnInit() {

}

}
