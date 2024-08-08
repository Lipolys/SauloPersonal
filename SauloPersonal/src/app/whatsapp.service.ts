import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  redirectToWhatsApp() {
    window.location.href = 'https://wa.me/5561993221873?text=Quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os';
  }
  constructor() { }
}
