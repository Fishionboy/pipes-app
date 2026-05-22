import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroSortBy'
})

export class HeroSortBy implements PipeTransform {
    transform(valu: Hero[], ...args: any[]): Hero[] {
        return [];
    }
}