import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShopingProject';
  public loadFeture:any = 'recipes';
  public type: any = "recipes";
  onNavigate(feture) {
    
    this.loadFeture = feture;

  }
}
