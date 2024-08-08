import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {WhatsappService} from "../whatsapp.service";

@Component({
  selector: 'app-wpp',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './wpp.component.html',
  styleUrl: './wpp.component.scss'
})
export class WppComponent {
  constructor(private whatsappService: WhatsappService) { }
  redirectToWhatsApp() {
    this.whatsappService.redirectToWhatsApp();
  }
}
