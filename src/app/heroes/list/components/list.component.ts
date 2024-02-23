import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: '../list.component.html',
  styleUrls: ['../list.component.css']
})
export class ListComponent {

  public listHeroes: string[] = ['Batman', 'Spiderman', 'Superman', 'Wolverine'];
  public deletedHero?: string;

  removeLastHero() {
    this.deletedHero = this.listHeroes.pop();
  }

}
