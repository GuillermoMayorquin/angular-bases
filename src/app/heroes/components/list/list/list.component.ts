import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow'];
  deletedHero?: string;

  deletedHeroName():void {
   const deletedHero = this.heroNames.pop();
   this.deletedHero = deletedHero;

  }

}
