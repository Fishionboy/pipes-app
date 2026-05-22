import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../service/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  localService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('javier');
  nameUpper = signal('JAVIER');
  fullName = signal('JavIeR FishOnBoY');

  customDate = signal(new Date);

  tickingDayEffect = effect((pizza) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    },1000);

    pizza(()=> {
      clearInterval(interval);
    })
  });

  changeLocale(locale: AvailableLocale){
    console.log(locale);
    this.localService.changeLocale(locale);
  }
}
