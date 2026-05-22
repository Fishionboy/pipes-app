import { ColorMap } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

// type colorMap = (typeof ColorMap)[keyof typeof ColorMap] as (keyof typeof ColorMap);

@Pipe({
    name: 'heroColorPipe'
})

export class HeroColorPipe implements PipeTransform {

    transform(color: Color): string {

      return Color[color];
        // return [Color[color],ColorMap[color]]
    }
}