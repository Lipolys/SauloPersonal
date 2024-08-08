import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {WhatsappService} from "../whatsapp.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollToElement(nomeDoElemento: string): void {
    const servicoElement = document.getElementById(nomeDoElemento);
    if (servicoElement) {
      servicoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  constructor(private whatsappService: WhatsappService) { }
  redirectToWhatsApp() {
    this.whatsappService.redirectToWhatsApp();
  }
}
