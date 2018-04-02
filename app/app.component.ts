import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  items:string[];
  newMenuItem:string;;

  constructor(){
    this.items = ['tea','coffee','milk'];
    this.newMenuItem = '';
  }

  addItem(){
    this.items.push(this.newMenuItem);
    this.newMenuItem = '';
  }

  deleteItem(i){
    this.items.splice(i,1);
  }

  resetItems(){
    this.items = ['tea','coffee','milk'];
  }

}
