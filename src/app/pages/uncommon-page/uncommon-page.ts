import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  addres: 'Ottawa, Canadá'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 32,
  addres: 'Ottawa, Canadá'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card, 
    I18nSelectPipe, 
    I18nPluralPipe,
    SlicePipe, 
    JsonPipe, 
    UpperCasePipe,
    KeyValuePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }



  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);

  }

  clientsMap = signal({
    '=0':'no tenemos ningún cliente',
    '=1':'tenemos un cliente',
    '=2':' tenemos 2 clientes',
    other :' tenemos # clientes esperando',

  })

  //Plurar pipe
  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Natalia',
    'Melissa'
  ])

  deleteClient(){
    this.clients.update(prev => prev.slice(1));
  }

  //keyvalue pipe
  profile ={
    name:"Fernando",
    age:36,
    address:"Ottawwa, Canada"
  }

  //Async pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
   
    setTimeout(() => {
      resolve('Tenemos data en la promsea.');
      console.log('Promesa finalizada')

    }, 3500);
  });

  myObservableTime = interval(2000).pipe(
    tap((value) => console.log('ta:',value))
  );
}
