import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFlyPipe'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): string {
        if(value) return 'Puede volar';
        return 'No puede volar';
        
    }
}