import { Component } from '@angular/core';
import {random} from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = "Balázsovits";
  number = 0;

  onNameChanged(newName){
    this.rootName = newName;

  }
  OnIncrease(){
    this.number = random(1, 10);
  }
}
