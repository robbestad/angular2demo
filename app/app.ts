import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  template: `
      <h4>My favourite fruits</h4>
      <h5>All the fruits I know: <span class="badge">{{fruits.length}}</span></h5>
      <ul class="list-group">
        <li *ngFor="#fruit of fruits" class="list-group-item">
          {{fruit}}
        </li>
      </ul>
      <div class="form-inline">
        <input class="form-control" #fruitText>
        <button class="btn btn-default" (click)="addFruit(fruitText.value)">Add fruit</button>
      </div>
    `
})
export class App {
  fruits: Array<string>;
  constructor() {
    this.fruits= ["Apple", "Banana", "Pear"];
  }
  addFruit(fruit: string) {
    this.fruits.push(fruit);
  }
}
