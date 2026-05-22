import { heroes } from './../../data/hero.data';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { Color, ColorMap } from '../../interfaces/hero.interface';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    TitleCasePipe,
    HeroTextColorPipe,
    HeroCreatorPipe
  ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {

  name = signal('Fernando Herrera')

  upperCase = signal(true);

  toggleButton (){    
    this.upperCase.set(!this.upperCase());
    console.log(ColorMap[0]);
    this.nombre(2);
  }

  heroes = signal(heroes);
  public nombre(color: Color){
      console.log([Color[color],ColorMap[color]]);
  }
}
