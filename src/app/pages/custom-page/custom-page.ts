import { heroes } from './../../data/hero.data';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { Color, ColorMap, Hero } from '../../interfaces/hero.interface';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    TitleCasePipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe
  ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {

  name = signal('Fernando Herrera')

  upperCase = signal(true);

  sortBy = signal<keyof Hero | null >(null);

  toggleButton (){    
    this.upperCase.set(!this.upperCase());    
  }

  heroes = signal(heroes);

  searchQuery = signal('');

  public nombre(color: Color){
      console.log([Color[color],ColorMap[color]]);
  }
}
