import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents() {
return  EVENTS
  }
}
const EVENTS = [{
  id: 1,
  name: 'angular connect',
  date: '9/26/2036',
  time: '10:00 am',
  price: 599.99,
  imageUrl: 'assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
  }
}, {
  id: 2,
  name: 'angular connect2',
  date: '9/26/2036',
  time: '8:00 am',
  price: 599.99,
  imageUrl: 'assets/images/angularconnect-shield.png',
  location: {
    address: '1058 DT',
    city: 'London',
    country: 'England'
  }
}]
