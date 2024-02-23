import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../hero.component.html',
  styleUrls: ['../hero.component.css']
 })
export class HeroComponent {

  public secretEntity: string = 'Spiderman';
  public name: string = 'Carlos Osorio';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Martin Lebhiah';
    this.secretEntity = 'Batman';
  }

  changeAge(): void {
    this.age = 15;
  }

  resetForm(): void{
    this.secretEntity = 'Spiderman';
    this.name = 'Carlos Osorio';
    this.age = 35;
  }

}
