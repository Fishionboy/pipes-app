import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es'|'fr'|'en';

@Injectable({providedIn: 'root'})
export class LocaleService {
    
    private currenteLocale =signal<AvailableLocale>('es');

    constructor(){
      this.currenteLocale.set(
        localStorage.getItem('locale') as AvailableLocale ?? 'es'
      )
    }

    get getLocale(){
        return this.currenteLocale();
    }

    changeLocale(locale:AvailableLocale){
        localStorage.setItem('locale', locale);
        this.currenteLocale.set(locale);
        window.location.reload();
    }
    
}